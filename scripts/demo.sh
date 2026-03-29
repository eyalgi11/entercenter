#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

cd "$ROOT_DIR"

echo
echo "MyDay demo launcher"
echo
echo "What to record:"
echo "1. Main task list screen"
echo "2. Open the New Task screen"
echo "3. Add a task"
echo "4. Show it appears on the main screen"
echo "5. Toggle it to completed"
echo "6. Refresh and show it persisted"
echo
echo "URL: http://127.0.0.1:4173/"
echo "Stop the server with Ctrl+C when you're done."
echo

exec npm run dev -- --host 127.0.0.1 --port 4173
