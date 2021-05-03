
Test Commands:

```bash
curl "http://localhost:19092/topics/foo/messages?group=test"
```

```bash
curl -v -X POST "http://localhost:19092/topics/foo/messages?key=bar&sync" -H 'Content-Type: text/plain' -d 'Good news everyone!'
```
