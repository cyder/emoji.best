## GET /api/v1/search
Returns all emojis.

### Example

#### Request
```
GET /api/v1/search HTTP/1.1
Accept: text/xml,application/xml,application/xhtml+xml,text/html;q=0.9,text/plain;q=0.8,image/png,*/*;q=0.5
Host: www.example.com
```

#### Response
```
HTTP/1.1 200
Content-Type: application/json; charset=utf-8
X-Content-Type-Options: nosniff
X-Frame-Options: SAMEORIGIN

{
  "total": 4,
  "num": 10,
  "order": "new",
  "emojis": [
    {
      "id": 666,
      "name": "keyword emoji",
      "description": "sample",
      "number_of_donwloaded": 0,
      "images": {
        "learge_url": "large_image",
        "thumbnail_url": "thumbnail_image",
        "slack_url": "slack_image"
      },
      "tags": [

      ],
      "user": {
        "id": 1649,
        "name": "name"
      }
    },
    {
      "id": 665,
      "name": "taggedemoji",
      "description": "sample",
      "number_of_donwloaded": 0,
      "images": {
        "learge_url": "large_image",
        "thumbnail_url": "thumbnail_image",
        "slack_url": "slack_image"
      },
      "tags": [
        {
          "id": 26,
          "name": "tag_name"
        }
      ],
      "user": {
        "id": 1648,
        "name": "name"
      }
    },
    {
      "id": 664,
      "name": "downloaded emoji",
      "description": "sample",
      "number_of_donwloaded": 1,
      "images": {
        "learge_url": "large_image",
        "thumbnail_url": "thumbnail_image",
        "slack_url": "slack_image"
      },
      "tags": [

      ],
      "user": {
        "id": 1647,
        "name": "name"
      }
    },
    {
      "id": 663,
      "name": "normal emoji",
      "description": "sample",
      "number_of_donwloaded": 0,
      "images": {
        "learge_url": "large_image",
        "thumbnail_url": "thumbnail_image",
        "slack_url": "slack_image"
      },
      "tags": [

      ],
      "user": {
        "id": 1646,
        "name": "name"
      }
    }
  ]
}
```

## GET /api/v1/search
Returns a keyword_emoji.

### Example

#### Request
```
GET /api/v1/search?keyword=keyword HTTP/1.1
Accept: text/xml,application/xml,application/xhtml+xml,text/html;q=0.9,text/plain;q=0.8,image/png,*/*;q=0.5
Host: www.example.com
```

#### Response
```
HTTP/1.1 200
Content-Type: application/json; charset=utf-8
X-Content-Type-Options: nosniff
X-Frame-Options: SAMEORIGIN

{
  "total": 4,
  "num": 10,
  "order": "new",
  "emojis": [
    {
      "id": 670,
      "name": "keyword emoji",
      "description": "sample",
      "number_of_donwloaded": 0,
      "images": {
        "learge_url": "large_image",
        "thumbnail_url": "thumbnail_image",
        "slack_url": "slack_image"
      },
      "tags": [

      ],
      "user": {
        "id": 1655,
        "name": "name"
      }
    }
  ]
}
```

## GET /api/v1/search
Returns a newst emoji.

### Example

#### Request
```
GET /api/v1/search?order=new HTTP/1.1
Accept: text/xml,application/xml,application/xhtml+xml,text/html;q=0.9,text/plain;q=0.8,image/png,*/*;q=0.5
Host: www.example.com
```

#### Response
```
HTTP/1.1 200
Content-Type: application/json; charset=utf-8
X-Content-Type-Options: nosniff
X-Frame-Options: SAMEORIGIN

{
  "total": 4,
  "num": 10,
  "order": "new",
  "emojis": [
    {
      "id": 674,
      "name": "keyword emoji",
      "description": "sample",
      "number_of_donwloaded": 0,
      "images": {
        "learge_url": "large_image",
        "thumbnail_url": "thumbnail_image",
        "slack_url": "slack_image"
      },
      "tags": [

      ],
      "user": {
        "id": 1661,
        "name": "name"
      }
    },
    {
      "id": 673,
      "name": "taggedemoji",
      "description": "sample",
      "number_of_donwloaded": 0,
      "images": {
        "learge_url": "large_image",
        "thumbnail_url": "thumbnail_image",
        "slack_url": "slack_image"
      },
      "tags": [
        {
          "id": 28,
          "name": "tag_name"
        }
      ],
      "user": {
        "id": 1660,
        "name": "name"
      }
    },
    {
      "id": 672,
      "name": "downloaded emoji",
      "description": "sample",
      "number_of_donwloaded": 1,
      "images": {
        "learge_url": "large_image",
        "thumbnail_url": "thumbnail_image",
        "slack_url": "slack_image"
      },
      "tags": [

      ],
      "user": {
        "id": 1659,
        "name": "name"
      }
    },
    {
      "id": 671,
      "name": "normal emoji",
      "description": "sample",
      "number_of_donwloaded": 0,
      "images": {
        "learge_url": "large_image",
        "thumbnail_url": "thumbnail_image",
        "slack_url": "slack_image"
      },
      "tags": [

      ],
      "user": {
        "id": 1658,
        "name": "name"
      }
    }
  ]
}
```

## GET /api/v1/search
Returns a downloaded_emoji.

### Example

#### Request
```
GET /api/v1/search?order=popular HTTP/1.1
Accept: text/xml,application/xml,application/xhtml+xml,text/html;q=0.9,text/plain;q=0.8,image/png,*/*;q=0.5
Host: www.example.com
```

#### Response
```
HTTP/1.1 200
Content-Type: application/json; charset=utf-8
X-Content-Type-Options: nosniff
X-Frame-Options: SAMEORIGIN

{
  "total": 4,
  "num": 10,
  "order": "popular",
  "emojis": [
    {
      "id": 676,
      "name": "downloaded emoji",
      "description": "sample",
      "number_of_donwloaded": 1,
      "images": {
        "learge_url": "large_image",
        "thumbnail_url": "thumbnail_image",
        "slack_url": "slack_image"
      },
      "tags": [

      ],
      "user": {
        "id": 1665,
        "name": "name"
      }
    },
    {
      "id": 678,
      "name": "keyword emoji",
      "description": "sample",
      "number_of_donwloaded": 0,
      "images": {
        "learge_url": "large_image",
        "thumbnail_url": "thumbnail_image",
        "slack_url": "slack_image"
      },
      "tags": [

      ],
      "user": {
        "id": 1667,
        "name": "name"
      }
    },
    {
      "id": 677,
      "name": "taggedemoji",
      "description": "sample",
      "number_of_donwloaded": 0,
      "images": {
        "learge_url": "large_image",
        "thumbnail_url": "thumbnail_image",
        "slack_url": "slack_image"
      },
      "tags": [
        {
          "id": 29,
          "name": "tag_name"
        }
      ],
      "user": {
        "id": 1666,
        "name": "name"
      }
    },
    {
      "id": 675,
      "name": "normal emoji",
      "description": "sample",
      "number_of_donwloaded": 0,
      "images": {
        "learge_url": "large_image",
        "thumbnail_url": "thumbnail_image",
        "slack_url": "slack_image"
      },
      "tags": [

      ],
      "user": {
        "id": 1664,
        "name": "name"
      }
    }
  ]
}
```
