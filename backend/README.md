## Logging

Install dependency: `pip install loguru`

```python
from loguru import logger

logger.info("info")
logger.warn("warn")
# ...
```

This log does not affect the normal output of Flask app. 