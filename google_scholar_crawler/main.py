import json
import os
from datetime import datetime, timezone
from pathlib import Path

from scholarly import scholarly


def main() -> None:
    scholar_id = os.environ["GOOGLE_SCHOLAR_ID"]
    repo_root = Path(__file__).resolve().parent.parent
    output_dir = repo_root / "google-scholar-stats"
    output_dir.mkdir(parents=True, exist_ok=True)

    author = scholarly.search_author_id(scholar_id)
    scholarly.fill(author, sections=["basics", "indices", "counts", "publications"])

    publications = {}
    for publication in author.get("publications", []):
        pub_id = publication.get("author_pub_id")
        if pub_id:
            publications[pub_id] = publication

    payload = {
        "name": author.get("name"),
        "citedby": author.get("citedby", 0),
        "hindex": author.get("hindex"),
        "i10index": author.get("i10index"),
        "updated": datetime.now(timezone.utc).isoformat(),
        "publications": publications,
    }

    (output_dir / "gs_data.json").write_text(
        json.dumps(payload, ensure_ascii=False, indent=2) + "\n",
        encoding="utf-8",
    )

    shields_payload = {
        "schemaVersion": 1,
        "label": "citations",
        "message": str(payload["citedby"]),
    }
    (output_dir / "gs_data_shieldsio.json").write_text(
        json.dumps(shields_payload, ensure_ascii=False, indent=2) + "\n",
        encoding="utf-8",
    )


if __name__ == "__main__":
    main()
