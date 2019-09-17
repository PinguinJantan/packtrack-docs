define({ "api": [
  {
    "type": "get",
    "url": "api/api/user/role/:roleName:/resource",
    "title": "Get role resource permission",
    "group": "ACL",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "roleName",
            "description": "<p>role name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "resource",
            "description": "<p>resource name</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "success",
          "content": " {\n \"success\": true,\n \"resource\": {\n     \"name\": \"user\",\n     \"permissions\": [\n         \"GET\",\n         \"POST\",\n         \"DELETE\"\n     ]\n }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "not found or no permission",
          "content": " {\n    \"success\": false,\n    \"message\": \"Resource users not found or no access permission for admin\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/users.js",
    "groupTitle": "ACL",
    "name": "GetApiApiUserRoleRolenameResource",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>user login token</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "api/user/role/all",
    "title": "get all roles",
    "group": "ACL",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "roles",
            "description": "<p>list of roles</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>operation success or not</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "success example",
          "content": "{\n  \"success\": true,\n  \"roles\": [\n      \"basic\",\n      \"admin\",\n      \"Serdadu\"\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/users.js",
    "groupTitle": "ACL",
    "name": "GetApiUserRoleAll",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>user login token</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "api/user/role/:roleName",
    "title": "Get role detail",
    "group": "ACL",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "roleName",
            "description": "<p>role name</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "success",
          "content": "{\n    \"success\": true,\n    \"role\": {\n        \"name\": \"admin\",\n        \"resources\": [\n            {\n                \"name\": \"user\",\n                \"permission\": [\n                    \"GET\",\n                    \"POST\",\n                    \"DELETE\"\n                ]\n            },\n            {\n                \"name\": \"item\",\n                \"permission\": [\n                    \"GET\",\n                    \"POST\",\n                    \"DELETE\"\n                ]\n            }\n        ]\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Role not found",
          "content": "{\n    \"success\": false,\n    \"message\": \"Role admins not found\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/users.js",
    "groupTitle": "ACL",
    "name": "GetApiUserRoleRolename",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>user login token</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "api/user/role/assign",
    "title": "Assign a user to a role",
    "group": "ACL",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "role",
            "description": "<p>Role name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>user ID to be assigned</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "success",
          "content": "{\n    \"success\": true,\n    \"message\": \"role successfully assigned to user\",\n    \"user\": {\n        \"username\": \"mnirfan\",\n        \"name\": \"Nurul Irfan\"\n    },\n    \"role\": \"admin\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "user not found",
          "content": " {\n    \"success\": false,\n    \"message\": \"User not found\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/users.js",
    "groupTitle": "ACL",
    "name": "PostApiUserRoleAssign",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>user login token</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "api/user/role/create",
    "title": "Create new role",
    "group": "ACL",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "rolename",
            "description": "<p>Role name</p>"
          },
          {
            "group": "Parameter",
            "type": "json",
            "optional": false,
            "field": "permissions",
            "description": "<p>JSON string of permissionss</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "success",
          "content": "{\n   \"success\": true,\n   \"message\": \"berhasil menambahkan role\",\n   \"permissions\": {\n       \"roles\": \"scientist\",\n       \"allows\": [\n           {\n               \"resources\": \"user\",\n               \"permissions\": [\n                   \"GET\"\n               ]\n           },\n           {\n               \"resources\": \"item\",\n               \"permission\": [\n                   \"GET\",\n                   \"POST\"\n               ]\n           }\n       ]\n   }\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/users.js",
    "groupTitle": "ACL",
    "name": "PostApiUserRoleCreate",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>user login token</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "api/user/role/delete",
    "title": "Delete an existing role",
    "group": "ACL",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "rolename",
            "description": "<p>Role name</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "success",
          "content": "{\n   \"success\": true,\n   \"message\": \"Berhasil menghapus role scientist\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/users.js",
    "groupTitle": "ACL",
    "name": "PostApiUserRoleDelete",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>user login token</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "api/user/role/resouce/allow",
    "title": "Give resource access to a role",
    "description": "<p>operation will always succeeded even if resource or permission doesn't exist before</p>",
    "group": "ACL",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "role",
            "description": "<p>role name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "resource",
            "description": "<p>resource name</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "permissions",
            "description": "<p>permissions (POST, GET, DELETE, etc)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "success",
          "content": " {\n    \"success\": true,\n    \"message\": \"izin akses diberikan\",\n    \"acl\": {\n        \"role\": \"LOL\",\n        \"resource\": \"barrack\",\n        \"permissions\": [\n            \"POST\"\n        ]\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "role not found",
          "content": "{\n     \"success\": false,\n     \"message\": \"Role LOLa not found.\"\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/users.js",
    "groupTitle": "ACL",
    "name": "PostApiUserRoleResouceAllow",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>user login token</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "api/user/role/resouce/revoke",
    "title": "Revoke resource access from a role",
    "description": "<p>operation will always succeeded even if permission doesn't has permission before or resource doesn't exist</p>",
    "group": "ACL",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "role",
            "description": "<p>role name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "resource",
            "description": "<p>resource name</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "permissions",
            "description": "<p>permissions (POST, GET, DELETE, etc)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "success",
          "content": "{\n   \"success\": true,\n   \"message\": \"izin dicabut\",\n   \"acl\": {\n       \"role\": \"LOL\",\n       \"resource\": \"box\",\n       \"permissions\": [\n           \"UPDATE\"\n       ]\n   }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "role not found",
          "content": "{\n    \"success\": false,\n    \"message\": \"Role LOLa not found.\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/users.js",
    "groupTitle": "ACL",
    "name": "PostApiUserRoleResouceRevoke",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>user login token</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "auth/ping",
    "title": "Check access token validity",
    "group": "Auth",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "accessToken",
            "description": "<p>user access token</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "success example",
          "content": "{\n   \"success\": true\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>operation success or not</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/auth.js",
    "groupTitle": "Auth",
    "name": "GetAuthPing"
  },
  {
    "type": "post",
    "url": "auth/login",
    "title": "Login",
    "group": "Auth",
    "parameter": {
      "examples": [
        {
          "title": "Request-Example",
          "content": "{\n  \"username\" : \"jhondoe\",\n  \"password\" : \"secret\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "username",
            "description": "<p>username pengguna</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>password pengguna</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>true jika berhasil</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "user.name",
            "description": "<p>user full name</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "user.username",
            "description": "<p>username</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "user.token",
            "description": "<p>token setelah berhasil login</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "user.expiresAt",
            "description": "<p>waktu token kadaluwarsa dalam format UNIX epoch time</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "  HTTP/1.1 200 OK\n{\n \"success\": true,\n \"status\": \"OK\",\n \"message\": \"Login success boskuh\",\n \"user\": {\n   \"name\": \"jhondoe\",\n   \"username\": \"jhondoe\",\n   \"wareouseId\": 1,\n   \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImlyZmFuIiwiaWF0IjoxNTA5MDg4NDIzLCJleHAiOjE1MDkxNzQ4MjN9.PtvYELiK4Uyaw2phiyxOrBQJTC8BNNPVVgT1zinCk8g\"\n    },\n   \"expiresAt\": 1525700890\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Wrong password",
          "content": "HTTP/1.1/ 200 OK\n{\n  success: false,\n  \"status\": \"ERROR\",\n  message: \"Authentication failed. Wrong password.\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/auth.js",
    "groupTitle": "Auth",
    "name": "PostAuthLogin"
  },
  {
    "type": "get",
    "url": "api/carton/all",
    "title": "List carton",
    "group": "Carton",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "search",
            "description": "<p>search by <code>carton.barcode</code> field.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "sortBy",
            "description": "<p>sort by <code>updatedAt</code> or <code>barcode</code>.</p>"
          }
        ],
        "Query string": [
          {
            "group": "Query string",
            "type": "String",
            "optional": true,
            "field": "sortDirection",
            "defaultValue": "ASC",
            "description": "<p>sort in ascending or descending. Available: <code>ASC</code> and <code>DESC</code></p>"
          },
          {
            "group": "Query string",
            "type": "Number",
            "optional": true,
            "field": "limit",
            "defaultValue": "10",
            "description": "<p>limit size object per page</p>"
          },
          {
            "group": "Query string",
            "type": "Number",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>number of page to display</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "cartons",
            "description": "<p>carton objects</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "pagination",
            "description": "<p>Pagination detail</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>operation success or not</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "{\n    \"success\": true,\n    \"pagination\": {\n        \"total\": 7,\n        \"pageCount\": 1,\n        \"currentPage\": 1,\n        \"hasNextPage\": false,\n        \"hasPrevPage\": false\n    },\n    \"cartons\": [\n        {\n            \"id\": 3,\n            \"barcode\": \"CAAA\",\n            \"createdAt\": \"2018-02-07T04:55:24.000Z\",\n            \"updatedAt\": \"2018-02-07T04:55:24.000Z\",\n            \"profile\": {\n                \"id\": 2,\n                \"count\": 12,\n                \"type\": \"solid\"\n            },\n            \"warehouse\": {\n                \"id\": 2,\n                \"name\": \"Main\",\n                \"address\": \"Jl Raya\"\n            }\n        },\n        {\n            \"id\": 4,\n            \"barcode\": \"BOXAAA\",\n            \"createdAt\": \"2018-03-21T15:09:58.314Z\",\n            \"updatedAt\": \"2018-03-21T15:09:58.314Z\",\n            \"profile\": {\n                \"id\": 2,\n                \"count\": 12,\n                \"type\": \"solid\"\n            },\n            \"warehouse\": {\n                \"id\": 2,\n                \"name\": \"Main\",\n                \"address\": \"Jl Raya\"\n            }\n        },\n        {\n            \"id\": 12,\n            \"barcode\": \"MMMM\",\n            \"createdAt\": \"2018-04-05T01:08:15.677Z\",\n            \"updatedAt\": \"2018-04-05T01:08:15.677Z\",\n            \"profile\": {\n                \"id\": 2,\n                \"count\": 12,\n                \"type\": \"solid\"\n            },\n            \"warehouse\": null\n        },\n        {\n            \"id\": 13,\n            \"barcode\": \"AAAA\",\n            \"createdAt\": \"2018-04-05T14:12:55.879Z\",\n            \"updatedAt\": \"2018-04-05T14:12:55.879Z\",\n            \"profile\": {\n                \"id\": 2,\n                \"count\": 12,\n                \"type\": \"solid\"\n            },\n            \"warehouse\": null\n        },\n        {\n            \"id\": 53,\n            \"barcode\": \"AAAX\",\n            \"createdAt\": \"2018-04-06T16:02:03.376Z\",\n            \"updatedAt\": \"2018-04-06T16:02:03.376Z\",\n            \"profile\": {\n                \"id\": 2,\n                \"count\": 12,\n                \"type\": \"solid\"\n            },\n            \"warehouse\": null\n        },\n        {\n            \"id\": 60,\n            \"barcode\": \"AAAXZZ\",\n            \"createdAt\": \"2018-04-06T17:15:55.857Z\",\n            \"updatedAt\": \"2018-04-06T17:15:55.857Z\",\n            \"profile\": {\n                \"id\": 2,\n                \"count\": 12,\n                \"type\": \"solid\"\n            },\n            \"warehouse\": null\n        },\n        {\n            \"id\": 63,\n            \"barcode\": \"AAAXZZYZZ\",\n            \"createdAt\": \"2018-04-06T17:32:52.046Z\",\n            \"updatedAt\": \"2018-04-06T17:32:52.046Z\",\n            \"profile\": {\n                \"id\": 2,\n                \"count\": 12,\n                \"type\": \"solid\"\n            },\n            \"warehouse\": null\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "header": {
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHBpcmVzSW5NaW51dGVzIjoxNDQwLCJpYXQiOjE1MDcwMzQwNzJ9.je4md5GBuTSFGNivBaT3Ju7-yjVjkVS99WSIiwk7wA4\",\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>user login token</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Internal Server Error",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  success: false,\n  status: \"ERROR\",\n  carton: null\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/carton.js",
    "groupTitle": "Carton",
    "name": "GetApiCartonAll"
  },
  {
    "type": "get",
    "url": "api/carton/:barcode",
    "title": "Get carton detail by barcode",
    "group": "Carton",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "carton",
            "description": "<p>carton data</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>operation success or not</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "success example",
          "content": "{\n  \"success\": true,\n  \"carton\": {\n      \"id\": 4,\n      \"barcode\": \"BOXAAA\",\n      \"warehouseId\": 2,\n      \"createdAt\": \"2018-03-21T15:09:58.314Z\",\n      \"updatedAt\": \"2018-03-21T15:09:58.314Z\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/carton.js",
    "groupTitle": "Carton",
    "name": "GetApiCartonBarcode",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>user login token</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "api/carton/ping/:barcode",
    "title": "Ping a carton box",
    "group": "Carton",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "exist",
            "description": "<p>carton exists in database or not</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>operation success or not</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "success example",
          "content": "{\n  \"success\": true,\n  \"exist\": true\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "already exist",
          "content": "{\n  \"success\": true,\n  \"exist\": false\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/carton.js",
    "groupTitle": "Carton",
    "name": "GetApiCartonPingBarcode",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>user login token</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "api/carton/create",
    "title": "Create",
    "group": "Carton",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>token untuk login user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHBpcmVzSW5NaW51dGVzIjoxNDQwLCJpYXQiOjE1MDcwMzQwNzJ9.je4md5GBuTSFGNivBaT3Ju7-yjVjkVS99WSIiwk7wA4\",\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"barcode\": \"1231231\",\n    \"warehouseId\": 1,\n    \"profileId\": 1\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "barcode",
            "description": "<p>nomor sku carton</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "warehouseId",
            "description": "<p>id kategori carton</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "profileId",
            "description": "<p>id profile carton</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>true jika berhasil</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "status",
            "description": "<p>&quot;OK&quot; jika berhasil</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "carton",
            "description": "<p>array dari carton</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "success",
          "content": "  HTTP/1.1 200 OK\n {\n  \"id\": 9,\n  \"barcode\": \"1231231\",\n  \"warehouseId\": 1,\n  \"profileId\": 1,\n  \"updatedAt\": \"2017-10-30T05:14:33.876Z\",\n  \"createdAt\": \"2017-10-30T05:14:33.876Z\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Internal Server Error",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  success: false,\n  status: \"ERROR\",\n  carton: null\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/carton.js",
    "groupTitle": "Carton",
    "name": "PostApiCartonCreate"
  },
  {
    "type": "post",
    "url": "api/carton/repack",
    "title": "Repack",
    "group": "Carton",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>token untuk login user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHBpcmVzSW5NaW51dGVzIjoxNDQwLCJpYXQiOjE1MDcwMzQwNzJ9.je4md5GBuTSFGNivBaT3Ju7-yjVjkVS99WSIiwk7wA4\",\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"barcode\": \"1231231\",\n    \"warehouseId\": 1,\n    \"profileId\": 1,\n         \"repackCartonId\":[1,2]\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "barcode",
            "description": "<p>nomor sku carton</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "warehouseId",
            "description": "<p>id kategori carton</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "profileId",
            "description": "<p>id profile carton</p>"
          },
          {
            "group": "Parameter",
            "type": "object[]",
            "optional": false,
            "field": "repackCartonId",
            "description": "<p>array id carton yang di repack example:<code>[1,2]</code></p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>true jika berhasil</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "status",
            "description": "<p>&quot;OK&quot; jika berhasil</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "carton",
            "description": "<p>array dari carton</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "success",
          "content": "  HTTP/1.1 200 OK\n {\n  \"success\": true\n       \"message\": \"repack success\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "inner more than 12",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  success: false,\n  message: \"inner more than 12\"\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/carton.js",
    "groupTitle": "Carton",
    "name": "PostApiCartonRepack"
  },
  {
    "type": "delete",
    "url": "category/delete",
    "title": "Delete Category",
    "group": "Category",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>operation success or not</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "success example",
          "content": "{\n    \"success\": true,\n    \"message\": \"Category deleted\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/category.js",
    "groupTitle": "Category",
    "name": "DeleteCategoryDelete",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>user login token</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "api/category/list",
    "title": "List category",
    "group": "Category",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "categories",
            "description": "<p>categories</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>operation success or not</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "  HTTP/1.1 200 OK\n {\n \"success\": true,\n \"categories\": [\n     {\n         \"id\": 4,\n         \"name\": \"Tae Kwon Do\",\n         \"createdAt\": \"2017-10-03T12:02:22.377Z\",\n         \"updatedAt\": \"2017-10-03T12:02:22.377Z\"\n     },\n     {\n         \"id\": 5,\n         \"name\": \"Badminton\",\n         \"createdAt\": \"2017-10-03T12:02:22.377Z\",\n         \"updatedAt\": \"2017-10-03T12:02:22.377Z\"\n     }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "header": {
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHBpcmVzSW5NaW51dGVzIjoxNDQwLCJpYXQiOjE1MDcwMzQwNzJ9.je4md5GBuTSFGNivBaT3Ju7-yjVjkVS99WSIiwk7wA4\",\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>user login token</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Internal Server Error",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  success: false,\n  status: \"ERROR\",\n  item: null\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/category.js",
    "groupTitle": "Category",
    "name": "GetApiCategoryList"
  },
  {
    "type": "get",
    "url": "category/:categoryId",
    "title": "Detail Category",
    "group": "Category",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "category",
            "description": "<p>Category data</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>operation success or not</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "success example",
          "content": "{\n    \"success\": true,\n    \"category\": {\n        \"id\": 12,\n        \"name\": \"FG,M,04\",\n        \"createdAt\": \"2018-01-28T13:51:38.390Z\",\n        \"updatedAt\": \"2018-01-28T13:51:38.390Z\",\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "not found",
          "content": " {\n    \"success\": true,\n    \"message\": \"Category not found\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/category.js",
    "groupTitle": "Category",
    "name": "GetCategoryCategoryid",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>user login token</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "api/category/create",
    "title": "Create",
    "group": "Category",
    "header": {
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHBpcmVzSW5NaW51dGVzIjoxNDQwLCJpYXQiOjE1MDcwMzQwNzJ9.je4md5GBuTSFGNivBaT3Ju7-yjVjkVS99WSIiwk7wA4\",\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>user login token</p>"
          }
        ]
      }
    },
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"name\": \"running\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>nama category</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "created",
            "description": "<p>category object</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>operation success or not</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "success",
          "content": "HTTP/1.1 200 OK\n{\n  \"success\": true,\n  \"status\": \"OK\",\n  \"category\": {\n      \"id\": 22,\n      \"name\": \"running\",\n      \"updatedAt\": \"2017-10-06T09:15:17.193Z\",\n      \"createdAt\": \"2017-10-06T09:15:17.193Z\"\n},\n  \"message\": \"Create success\"",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Internal Server Error",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  success: false,\n  status: \"ERROR\",\n  item: null\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/category.js",
    "groupTitle": "Category",
    "name": "PostApiCategoryCreate"
  },
  {
    "type": "post",
    "url": "category/update",
    "title": "Update a Category",
    "group": "Category",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Category ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Category name</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "category",
            "description": "<p>updated Category data</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>operation success or not</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "success example",
          "content": "{\n    \"success\": true,\n    \"category\": {\n        \"id\": 12,\n        \"name\": \"FG,M,04\",\n        \"createdAt\": \"2018-01-28T13:51:38.461Z\",\n        \"updatedAt\": \"2018-02-27T16:34:09.634Z\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Category name already exist",
          "content": "{\n    \"success\": false,\n    \"errors\": [\n        {\n            \"message\": \"name must be unique\",\n            \"type\": \"unique violation\",\n            \"path\": \"name\",\n            \"value\": \"FG,M,04\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/category.js",
    "groupTitle": "Category",
    "name": "PostCategoryUpdate",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>user login token</p>"
          }
        ]
      }
    }
  },
  {
    "type": "delete",
    "url": "color/delete",
    "title": "Delete a color",
    "description": "<p>if an exisiting color is deleted, colorDeleted will be 1. if no color with given ID, colorDeleted will be 0.</p>",
    "group": "Color",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "colorDeleted",
            "description": "<p>how many colors deleted</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>operation success or not</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "success example",
          "content": "{\n   \"success\": true,\n   \"colorDeleted\": 1\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Constraint Error",
          "content": "{\n\"success\": false,\n\"error\": \"SequelizeForeignKeyConstraintError\",\n\"message\": \"Color with id 4 is being used. Can't perform delete.\"\n}",
          "type": "json"
        },
        {
          "title": "ID not a number",
          "content": "{\n    \"success\": false,\n    \"message\": \"Color ID must be a number\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/color.js",
    "groupTitle": "Color",
    "name": "DeleteColorDelete",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>user login token</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "api/color/list",
    "title": "List colors",
    "group": "Color",
    "header": {
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHBpcmVzSW5NaW51dGVzIjoxNDQwLCJpYXQiOjE1MDcwMzQwNzJ9.je4md5GBuTSFGNivBaT3Ju7-yjVjkVS99WSIiwk7wA4\",\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>user login token</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "  HTTP/1.1 200 OK\n {\n \"success\": true,\n     \"colors\": [\n        {\n            \"id\": 1,\n            \"name\": \"Black/White\"\n        },\n        {\n            \"id\": 2,\n            \"name\": \"Red\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Internal Server Error",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  success: false,\n  error: {}\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/color.js",
    "groupTitle": "Color",
    "name": "GetApiColorList"
  },
  {
    "type": "get",
    "url": "color/:colorId",
    "title": "Get color detail by ID",
    "description": "<p>if color with given ID not found, the the color object will filled with null.</p>",
    "group": "Color",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "color",
            "description": "<p>color data</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>operation success or not</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "success example",
          "content": "{\n   \"success\": true,\n   \"color\": {\n       \"id\": 1,\n       \"name\": \"Black/White\",\n       \"createdAt\": \"2017-12-09T12:43:14.030Z\",\n       \"updatedAt\": \"2017-12-09T12:43:14.030Z\"\n   }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "ID not a number",
          "content": "{\n    \"success\": false,\n    \"message\": \"Color ID must be a number\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/color.js",
    "groupTitle": "Color",
    "name": "GetColorColorid",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>user login token</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "color/all",
    "title": "Get all colors (paginated)",
    "group": "Color",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "colors",
            "description": "<p>Colors in current page</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "pagination",
            "description": "<p>Pagination detail</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>operation success or not</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "success example",
          "content": "{\n    \"success\": true,\n    \"pagination\": {\n        \"total\": 2,\n        \"pageCount\": 1,\n        \"currentPage\": 1,\n        \"hasNextPage\": false,\n        \"hasPrevPage\": false\n    },\n    \"colors\": [\n        {\n            \"id\": 2,\n            \"name\": \"Black/Citroon\",\n            \"createdAt\": \"2017-12-09T12:43:14.030Z\",\n            \"updatedAt\": \"2017-12-09T12:43:14.030Z\"\n        },\n        {\n            \"id\": 3,\n            \"name\": \"Lime/Gray\",\n            \"createdAt\": \"2017-12-09T12:43:14.030Z\",\n            \"updatedAt\": \"2017-12-09T12:43:14.030Z\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/color.js",
    "groupTitle": "Color",
    "name": "PostColorAll",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>user login token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Query string": [
          {
            "group": "Query string",
            "type": "Number",
            "optional": true,
            "field": "limit",
            "defaultValue": "10",
            "description": "<p>limit size object per page</p>"
          },
          {
            "group": "Query string",
            "type": "Number",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>number of page to display</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "color/create",
    "title": "Create new color",
    "group": "Color",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "color",
            "description": "<p>new color data</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>operation success or not</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "success example",
          "content": "{\n    \"success\": true,\n    \"color\": {\n        \"id\": 10,\n        \"name\": \"Black / Blue\",\n        \"updatedAt\": \"2018-01-15T13:14:09.172Z\",\n        \"createdAt\": \"2018-01-15T13:14:09.172Z\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Empty name",
          "content": "{\n    \"success\": false,\n    \"message\": \"Please don't give blank name\"\n}",
          "type": "json"
        },
        {
          "title": "Color already exist",
          "content": "{\n    \"success\": false,\n    \"message\": \"Operation failed with error(s)\",\n    \"errors\": [\n        {\n            \"message\": \"name must be unique\",\n            \"type\": \"unique violation\",\n            \"path\": \"name\",\n            \"value\": \"Red / Blue\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/color.js",
    "groupTitle": "Color",
    "name": "PostColorCreate",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>user login token</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "color/update",
    "title": "update an exisiting color",
    "group": "Color",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "color",
            "description": "<p>updated color data</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>operation success or not</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "success example",
          "content": "{\n    \"success\": true,\n    \"color\": {\n        \"id\": \"1\",\n        \"name\": \"Black / White\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "ID not a number",
          "content": "{\n    \"success\": false,\n    \"message\": \"Color ID must be a number\"\n}",
          "type": "json"
        },
        {
          "title": "No color with given ID",
          "content": "{\n   \"success\": false,\n   \"message\": \"No color with ID 100\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/color.js",
    "groupTitle": "Color",
    "name": "PostColorUpdate",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>user login token</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "api/deliveryorder/all",
    "title": "List deliveryorder",
    "group": "Delivery_Order",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>token untuk login user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHBpcmVzSW5NaW51dGVzIjoxNDQwLCJpYXQiOjE1MDcwMzQwNzJ9.je4md5GBuTSFGNivBaT3Ju7-yjVjkVS99WSIiwk7wA4\",\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": " HTTP/1.1 200 OK\n{\n  \"success\": true,\n   \"status\": \"OK\",\n   \"deliveryOrder\": [\n      {\n        \"id\": 1,\n        \"number\": \"312312312\",\n        \"createdAt\": \"2017-11-06T12:20:39.116Z\",\n        \"updatedAt\": \"2017-11-06T12:20:39.116Z\"\n      },\n      {\n        \"id\": 2,\n        \"number\": \"312312312\",\n        \"createdAt\": \"2017-11-06T12:21:06.945Z\",\n        \"updatedAt\": \"2017-11-06T12:21:06.945Z\"\n      }\n    ]\n    },",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Internal Server Error",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  success: false,\n  status: \"ERROR\",\n  item: null\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/deliveryorder.js",
    "groupTitle": "Delivery_Order",
    "name": "GetApiDeliveryorderAll"
  },
  {
    "type": "post",
    "url": "api/deliveryorder/create",
    "title": "Create",
    "group": "Delivery_Order",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>token untuk login user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHBpcmVzSW5NaW51dGVzIjoxNDQwLCJpYXQiOjE1MDcwMzQwNzJ9.je4md5GBuTSFGNivBaT3Ju7-yjVjkVS99WSIiwk7wA4\",\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"number\": \"312312312\",\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "number",
            "description": "<p>nomer deliveryorder</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>true jika berhasil</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "status",
            "description": "<p>&quot;OK&quot; jika berhasil</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "deliveryorder",
            "description": "<p>array dari deliveryorder</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "success",
          "content": "HTTP/1.1 200 OK\n{\n  \"success\": true,\n  \"status\": \"OK\",\n  \"deliveryorder\": {\n      \"id\": 12,\n      \"number\": \"312312312\",\n      \"updatedAt\": \"2017-11-06T07:01:32.361Z\",\n      \"createdAt\": \"2017-11-06T07:01:32.361Z\"\n    }\n},",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Internal Server Error",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  success: false,\n  status: \"ERROR\",\n  deliveryorder: null\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/deliveryorder.js",
    "groupTitle": "Delivery_Order",
    "name": "PostApiDeliveryorderCreate"
  },
  {
    "type": "get",
    "url": "api/gender/list",
    "title": "List genders",
    "group": "Gender",
    "header": {
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHBpcmVzSW5NaW51dGVzIjoxNDQwLCJpYXQiOjE1MDcwMzQwNzJ9.je4md5GBuTSFGNivBaT3Ju7-yjVjkVS99WSIiwk7wA4\",\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>user login token</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "  HTTP/1.1 200 OK\n {\n \"success\": true,\n     \"genders\": [\n        {\n            \"id\": 1,\n            \"name\": \"M\"\n        },\n        {\n            \"id\": 2,\n            \"name\": \"F\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Internal Server Error",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  success: false,\n  error: {}\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/gender.js",
    "groupTitle": "Gender",
    "name": "GetApiGenderList"
  },
  {
    "type": "get",
    "url": "api/inner/all",
    "title": "List inner",
    "group": "Inner",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "search",
            "description": "<p>string to search in <code>inner.barcode</code>, <code>carton.barcode</code>, <code>warehouse.name</code>, and <code>item.code</code> field.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "sortBy",
            "description": "<p>available: <code>updatedAt</code>, <code>item</code>, <code>carton</code>, <code>stock</code>, <code>grade</code>, or <code>source</code>.</p>"
          }
        ],
        "Query string": [
          {
            "group": "Query string",
            "type": "Number",
            "optional": true,
            "field": "limit",
            "defaultValue": "10",
            "description": "<p>limit size object per page</p>"
          },
          {
            "group": "Query string",
            "type": "Number",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>number of page to display</p>"
          },
          {
            "group": "Query string",
            "type": "String",
            "optional": true,
            "field": "sortDirection",
            "defaultValue": "ASC",
            "description": "<p>sort in ascending or descending. Available: <code>ASC</code> and <code>DESC</code></p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "inners",
            "description": "<p>Inners object</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "pagination",
            "description": "<p>Pagination detail</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>operation success or not</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "    HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"pagination\": {\n        \"total\": 16,\n        \"pageCount\": 2,\n        \"currentPage\": 1,\n        \"hasNextPage\": true,\n        \"hasPrevPage\": false\n    },\n    \"inners\": [\n        {\n            \"barcode\": \"MASK\",\n            \"isInStok\": null,\n            \"createdAt\": \"2018-04-06T17:32:52.076Z\",\n            \"updatedAt\": \"2018-04-06T17:32:52.076Z\",\n            \"carton\": {\n                \"id\": 63,\n                \"barcode\": \"AAAXZZYZZ\",\n                \"profileId\": 2,\n                \"warehouseId\": null,\n                \"warehouse\": null\n            },\n            \"item\": {\n                \"id\": 10310,\n                \"code\": \"FGJ01SUPERB31\",\n                \"sizeId\": 2,\n                \"skuId\": 3308\n            },\n            \"innerGrade\": null,\n            \"innerSource\": null\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "header": {
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHBpcmVzSW5NaW51dGVzIjoxNDQwLCJpYXQiOjE1MDcwMzQwNzJ9.je4md5GBuTSFGNivBaT3Ju7-yjVjkVS99WSIiwk7wA4\",\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>user login token</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Internal Server Error",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  success: false,\n  inners: null\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/inner.js",
    "groupTitle": "Inner",
    "name": "GetApiInnerAll"
  },
  {
    "type": "get",
    "url": "api/inner/ping",
    "title": "Ping an inner box",
    "group": "Inner",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "barcode",
            "description": "<p>Inner barcode</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "itemCode",
            "description": "<p>Item code</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "exist",
            "description": "<p>inner exists in database or not</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "itemDetail",
            "description": "<p>additional item detail</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>operation success or not</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "available for use",
          "content": "{\n  \"success\": true,\n  \"exist\": false,\n  \"itemDetail\": {\n    \"size\": \"31\",\n    \"skuName\": \"SUPER STAR B JR\"\n  }\n}",
          "type": "json"
        },
        {
          "title": "already exist",
          "content": "{\n  \"success\": true,\n  \"exist\": true\n}",
          "type": "json"
        },
        {
          "title": "item not found",
          "content": "{\n  \"success\": true,\n  \"exist\": false\n  \"itemDetail\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/inner.js",
    "groupTitle": "Inner",
    "name": "GetApiInnerPing",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>user login token</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "inner/:barcode",
    "title": "Get inner detail by barcode",
    "group": "Inner",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "carton",
            "description": "<p>carton object</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>operation success or not</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "success example",
          "content": "{\n   \"success\": true,\n   \"carton\": {\n       \"id\": 13,\n       \"barcode\": \"AAAA\",\n       \"warehouseId\": null,\n       \"createdAt\": \"2018-04-05T14:12:55.879Z\",\n       \"updatedAt\": \"2018-04-05T14:12:55.879Z\"\n   }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/inner.js",
    "groupTitle": "Inner",
    "name": "GetInnerBarcode",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>user login token</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "api/inner/create",
    "title": "Create",
    "group": "Inner",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>token untuk login user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHBpcmVzSW5NaW51dGVzIjoxNDQwLCJpYXQiOjE1MDcwMzQwNzJ9.je4md5GBuTSFGNivBaT3Ju7-yjVjkVS99WSIiwk7wA4\",\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"barcode\": \"1212kj2\",\n    \"cartonId\": 7,\n    \"isInStok\": 1,\n    \"gradeId\": \"1\",\n    \"sourceId\": \"2\",\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "barcode",
            "description": "<p>barcode inner</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "categoryId",
            "description": "<p>id kategori inner</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "isInStok",
            "description": "<p>status stok inner</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "gradeId",
            "description": "<p>id grade inner</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "sourceId",
            "description": "<p>id source inner</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>true jika berhasil</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "status",
            "description": "<p>&quot;OK&quot; jika berhasil</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "inner",
            "description": "<p>array dari inner</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "success",
          "content": " HTTP/1.1 200 OK\n{\n  \"success\": true,\n  \"status\": \"OK\",\n  \"inner\": {\n      \"id\": 44,\n      \"barcode\": \"1212kj2\",\n      \"itemId\": 3,\n      \"cartonId\": 7,\n      \"isInStok\": true,\n      \"gradeId\": 1,\n      \"sourceId\": 3,\n      \"updatedAt\": \"2017-10-30T12:49:01.130Z\",\n      \"createdAt\": \"2017-10-30T12:49:01.130Z\"\n    }\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Internal Server Error",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  success: false,\n  status: \"ERROR\",\n  inner: null\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/inner.js",
    "groupTitle": "Inner",
    "name": "PostApiInnerCreate"
  },
  {
    "type": "post",
    "url": "api/inner/input-scan",
    "title": "Input scan (with carton box)",
    "group": "Inner",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cartonBarcode",
            "description": "<p>carton barcode</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "profileId",
            "description": "<p>carton profile ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "innerCodes",
            "description": "<p>inner barcode and item code.</p> <p>example: <code>[{&quot;barcode&quot;: &quot;CODE123&quot;, &quot;itemCode&quot;: &quot;FGJ01SUPERB31&quot;}, {&quot;barcode&quot;: &quot;CODE124&quot;, &quot;itemCode&quot;: &quot;FGJ01SUPERB31&quot;}]</code></p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "success example",
          "content": "{\n  \"success\": true\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>operation success or not</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "exist example",
          "content": "{\n    \"success\": false,\n    \"message\": \"carton already registered\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/inner.js",
    "groupTitle": "Inner",
    "name": "PostApiInnerInputScan",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>user login token</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "api/innerDeliveryOrder/all",
    "title": "List innerDeliveryOrder",
    "group": "Inner_Delivery_Order",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>token untuk login user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHBpcmVzSW5NaW51dGVzIjoxNDQwLCJpYXQiOjE1MDcwMzQwNzJ9.je4md5GBuTSFGNivBaT3Ju7-yjVjkVS99WSIiwk7wA4\",\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n \"success\": true,\n \"status\": \"OK\",\n \"innerDeliveryOrder\": [\n    {\n        \"id\": 1,\n        \"quantity\": 10,\n        \"innerId\": 7,\n        \"deliveryOrderId\": 1,\n        \"createdAt\": \"2017-11-07T16:00:44.480Z\",\n        \"updatedAt\": \"2017-11-07T16:00:44.480Z\",\n        \"Inner\": {\n            \"id\": 7,\n            \"barcode\": \"1212kj2\",\n            \"itemId\": 3,\n            \"cartonId\": 3,\n            \"isInStok\": true,\n            \"gradeId\": 3,\n            \"sourceId\": 1,\n            \"createdAt\": \"2017-11-04T07:34:03.555Z\",\n            \"updatedAt\": \"2017-11-04T07:34:03.555Z\"\n        },\n        \"DeliveryOrder\": {\n            \"id\": 1,\n            \"number\": \"312312312\",\n            \"createdAt\": \"2017-11-06T12:20:39.116Z\",\n            \"updatedAt\": \"2017-11-06T12:20:39.116Z\"\n        }\n    }\n  ]\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Internal Server Error",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  success: false,\n  status: \"ERROR\",\n  innerDeliveryOrder: null\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/innerDeliveryOrder.js",
    "groupTitle": "Inner_Delivery_Order",
    "name": "GetApiInnerdeliveryorderAll"
  },
  {
    "type": "post",
    "url": "api/innerDeliveryOrder/create",
    "title": "Create",
    "group": "Inner_Delivery_Order",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>token untuk login user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHBpcmVzSW5NaW51dGVzIjoxNDQwLCJpYXQiOjE1MDcwMzQwNzJ9.je4md5GBuTSFGNivBaT3Ju7-yjVjkVS99WSIiwk7wA4\",\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"quantity\": 10,\n    \"innerId\": 7,\n    \"deliveryOrderId\": 1,\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "quantity",
            "description": "<p>jumlah inner yang dibutuhkan</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "innerId",
            "description": "<p>id inner</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "deliveryOrderId",
            "description": "<p>id deliveryOrder</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>true jika berhasil</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "status",
            "description": "<p>&quot;OK&quot; jika berhasil</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "innerDeliveryOrder",
            "description": "<p>array dari innerDeliveryOrder</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "success",
          "content": " HTTP/1.1 200 OK\n{\n  \"success\": true,\n   \"status\": \"OK\",\n   \"innerDeliveryOrder\": {\n        \"id\": 1,\n        \"quantity\": 10,\n        \"innerId\": 7,\n        \"deliveryOrderId\": 1,\n        \"updatedAt\": \"2017-11-07T16:00:44.480Z\",\n        \"createdAt\": \"2017-11-07T16:00:44.480Z\"\n      }\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Internal Server Error",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  success: false,\n  status: \"ERROR\",\n  innerDeliveryOrder: null\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/innerDeliveryOrder.js",
    "groupTitle": "Inner_Delivery_Order",
    "name": "PostApiInnerdeliveryorderCreate"
  },
  {
    "type": "get",
    "url": "api/innergrade/all",
    "title": "List innerGrade",
    "group": "Inner_Grade",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>token untuk login user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHBpcmVzSW5NaW51dGVzIjoxNDQwLCJpYXQiOjE1MDcwMzQwNzJ9.je4md5GBuTSFGNivBaT3Ju7-yjVjkVS99WSIiwk7wA4\",\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": " HTTP/1.1 200 OK\n  \"success\": true,\n  \"status\": \"OK\",\n  \"innerGrade\": [\n    {\n        \"id\": 1,\n        \"name\": \"A\",\n        \"createdAt\": \"2017-10-28T17:37:29.118Z\",\n        \"updatedAt\": \"2017-10-28T17:37:29.118Z\"\n    },{\n        \"id\": 2,\n        \"name\": \"B\",\n        \"createdAt\": \"2017-10-28T17:37:29.118Z\",\n        \"updatedAt\": \"2017-10-28T17:37:29.118Z\"\n    },\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Internal Server Error",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  success: false,\n  status: \"ERROR\",\n  item: null\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/innergrade.js",
    "groupTitle": "Inner_Grade",
    "name": "GetApiInnergradeAll"
  },
  {
    "type": "get",
    "url": "api/innergrade/:id",
    "title": "Detail innerGrade",
    "group": "Inner_Grade",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>token untuk login user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHBpcmVzSW5NaW51dGVzIjoxNDQwLCJpYXQiOjE1MDcwMzQwNzJ9.je4md5GBuTSFGNivBaT3Ju7-yjVjkVS99WSIiwk7wA4\",\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n \"success\": true,\n \"status\": \"OK\",\n \"innerGrade\": {\n       \"id\": 1,\n       \"name\": \"A\",\n       \"createdAt\": \"2017-10-28T17:37:29.118Z\",\n       \"updatedAt\": \"2017-10-28T17:37:29.118Z\"\n   }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Internal Server Error",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  success: false,\n  status: \"ERROR\",\n  item: null\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/innergrade.js",
    "groupTitle": "Inner_Grade",
    "name": "GetApiInnergradeId"
  },
  {
    "type": "post",
    "url": "api/innergrade/create",
    "title": "Create",
    "group": "Inner_Grade",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>token untuk login user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHBpcmVzSW5NaW51dGVzIjoxNDQwLCJpYXQiOjE1MDcwMzQwNzJ9.je4md5GBuTSFGNivBaT3Ju7-yjVjkVS99WSIiwk7wA4\",\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"name\": \"A\",\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>nama innerGrade</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>true jika berhasil</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "status",
            "description": "<p>&quot;OK&quot; jika berhasil</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "innerGrade",
            "description": "<p>array dari innerGrade</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "success",
          "content": "   HTTP/1.1 200 OK\n   \"success\": true,\n   \"status\": \"OK\",\n   \"innerGrade\": {\n      \"id\": 4,\n      \"name\": \"C\",\n      \"updatedAt\": \"2017-10-30T09:02:58.603Z\",\n      \"createdAt\": \"2017-10-30T09:02:58.603Z\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Internal Server Error",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  success: false,\n  status: \"ERROR\",\n  item: null",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/innergrade.js",
    "groupTitle": "Inner_Grade",
    "name": "PostApiInnergradeCreate"
  },
  {
    "type": "get",
    "url": "api/innerreport/all",
    "title": "List Opname (paginated)",
    "group": "Inner_Report",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>token untuk login user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHBpcmVzSW5NaW51dGVzIjoxNDQwLCJpYXQiOjE1MDcwMzQwNzJ9.je4md5GBuTSFGNivBaT3Ju7-yjVjkVS99WSIiwk7wA4\",\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>true jika berhasil</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "pagination",
            "description": "<p>paginasi</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "status",
            "description": "<p>&quot;OK&quot; jika berhasil</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "innerReport",
            "description": "<p>array dari inner</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "success",
          "content": " HTTP/1.1 200 OK\n{\n     \"success\": true,\n        \"message\": \"Request success\",\n        \"pagination\": {\n            \"innerReportTotal\": 16,\n            \"pageCount\": 2,\n            \"currentPage\": 1,\n            \"hasNextPage\": true,\n            \"hasPrevPage\": false\n        },\n        \"status\": \"OK\",\n        \"innerReport\": [\n            {\n                \"id\": 212,\n                \"innerId\": 7,\n                \"reportId\": 13,\n                \"report\": {\n                    \"id\": 13,\n                    \"createdAt\": \"2017-12-12T09:53:00.979Z\",\n                    \"updatedAt\": \"2017-12-12T09:53:00.979Z\"\n                }\n            },\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Internal Server Error",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  success: false,\n  status: \"ERROR\",\n  innerReport: null\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/innerreport.js",
    "groupTitle": "Inner_Report",
    "name": "GetApiInnerreportAll"
  },
  {
    "type": "post",
    "url": "api/innerreport/create",
    "title": "Create With innerId",
    "group": "Inner_Report",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>token untuk login user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHBpcmVzSW5NaW51dGVzIjoxNDQwLCJpYXQiOjE1MDcwMzQwNzJ9.je4md5GBuTSFGNivBaT3Ju7-yjVjkVS99WSIiwk7wA4\",\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"innerId\": \"9\",\n    \"reportId\": 7\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "innerId",
            "description": "<p>id inner</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "reportId",
            "description": "<p>id report</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>true jika berhasil</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "status",
            "description": "<p>&quot;OK&quot; jika berhasil</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "innerReport",
            "description": "<p>array dari inner</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "success",
          "content": " HTTP/1.1 200 OK\n{\n     \"success\": true,\n     \"message\": \"create report success\",\n     \"status\": \"OK\",\n     \"innerReport\": {\n         \"id\": 215,\n         \"innerId\": 9,\n         \"reportId\": 13,\n         \"updatedAt\": \"2018-03-12T15:28:28.660Z\",\n         \"createdAt\": \"2018-03-12T15:28:28.660Z\"\n     }\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Internal Server Error",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  success: false,\n  status: \"ERROR\",\n  innerReport: null\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/innerreport.js",
    "groupTitle": "Inner_Report",
    "name": "PostApiInnerreportCreate"
  },
  {
    "type": "post",
    "url": "api/innerreport/scancarton",
    "title": "Opname",
    "group": "Inner_Report",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>token untuk login user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHBpcmVzSW5NaW51dGVzIjoxNDQwLCJpYXQiOjE1MDcwMzQwNzJ9.je4md5GBuTSFGNivBaT3Ju7-yjVjkVS99WSIiwk7wA4\",\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"cartonBarcode\": \"1212kj2\",\n    \"reportId\": 7\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "cartonBarcode",
            "description": "<p>barcode carton</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "reportId",
            "description": "<p>id report</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>true jika berhasil</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "status",
            "description": "<p>&quot;OK&quot; jika berhasil</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "innerReport",
            "description": "<p>array dari inner</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "success",
          "content": " HTTP/1.1 200 OK\n{\n    \"success\": true,\n        \"message\": \"opname success\",\n        \"status\": \"OK\"\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Internal Server Error",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  success: false,\n  status: \"ERROR\",\n  inner: null\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/innerreport.js",
    "groupTitle": "Inner_Report",
    "name": "PostApiInnerreportScancarton"
  },
  {
    "type": "get",
    "url": "api/innersource/all",
    "title": "List innerSource",
    "group": "Inner_Source",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>token untuk login user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHBpcmVzSW5NaW51dGVzIjoxNDQwLCJpYXQiOjE1MDcwMzQwNzJ9.je4md5GBuTSFGNivBaT3Ju7-yjVjkVS99WSIiwk7wA4\",\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": " HTTP/1.1 200 OK\n {\n    \"success\": true,\n    \"status\": \"OK\",\n    \"innerSource\": [\n    {\n        \"id\": 2,\n        \"name\": \"Factory A\",\n        \"createdAt\": \"2017-10-30T09:56:01.672Z\",\n        \"updatedAt\": \"2017-10-30T09:56:01.672Z\"\n    },\n    {\n        \"id\": 3,\n        \"name\": \"Factory B\",\n        \"createdAt\": \"2017-10-30T09:57:50.808Z\",\n        \"updatedAt\": \"2017-10-30T09:57:50.808Z\"\n    }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Internal Server Error",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  success: false,\n  status: \"ERROR\",\n  item: null\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/innersource.js",
    "groupTitle": "Inner_Source",
    "name": "GetApiInnersourceAll"
  },
  {
    "type": "post",
    "url": "api/innersource/create",
    "title": "Create",
    "group": "Inner_Source",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>token untuk login user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHBpcmVzSW5NaW51dGVzIjoxNDQwLCJpYXQiOjE1MDcwMzQwNzJ9.je4md5GBuTSFGNivBaT3Ju7-yjVjkVS99WSIiwk7wA4\",\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"name\": \"factory\",\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>nama innerSource</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>true jika berhasil</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "status",
            "description": "<p>&quot;OK&quot; jika berhasil</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "innerSource",
            "description": "<p>array dari innerSource</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "success",
          "content": " HTTP/1.1 200 OK\n{\n   \"id\": 2,\n   \"name\": \"Factory A\",\n   \"updatedAt\": \"2017-10-30T09:56:01.672Z\",\n   \"createdAt\": \"2017-10-30T09:56:01.672Z\"\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Internal Server Error",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  success: false,\n  status: \"ERROR\",\n  item: null\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/innersource.js",
    "groupTitle": "Inner_Source",
    "name": "PostApiInnersourceCreate"
  },
  {
    "type": "get",
    "url": "api/item/all",
    "title": "All item",
    "group": "Item",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "search",
            "description": "<p>search by <code>size.name</code>, <code>sku.name</code>, <code>item.name</code>, and <code>color.name</code> field.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "sortBy",
            "description": "<p>sort by <code>updatedAt</code>, <code>code</code>, or <code>name</code>.</p>"
          }
        ],
        "Query string": [
          {
            "group": "Query string",
            "type": "String",
            "optional": true,
            "field": "sortDirection",
            "defaultValue": "ASC",
            "description": "<p>sort in ascending or descending. Available: <code>ASC</code> and <code>DESC</code></p>"
          },
          {
            "group": "Query string",
            "type": "Number",
            "optional": true,
            "field": "limit",
            "defaultValue": "10",
            "description": "<p>limit size object per page</p>"
          },
          {
            "group": "Query string",
            "type": "Number",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>number of page to display</p>"
          }
        ]
      }
    },
    "header": {
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHBpcmVzSW5NaW51dGVzIjoxNDQwLCJpYXQiOjE1MDcwMzQwNzJ9.je4md5GBuTSFGNivBaT3Ju7-yjVjkVS99WSIiwk7wA4\",\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>user login token</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n  {\n      \"success\": true,\n      \"status\": \"OK\",\n      \"pagination\": {\n          \"total\": 7,\n          \"pageCount\": 1,\n          \"currentPage\": 1,\n          \"hasNextPage\": false,\n          \"hasPrevPage\": false\n      },\n      \"item\": [\n          {\n              \"id\": 1,\n              \"code\": \"I122221\",\n              \"createdAt\": \"2017-12-05T17:31:36.541Z\",\n              \"updatedAt\": \"2017-12-05T17:31:36.541Z\",\n              \"size\": \"47\",\n              \"sku\": {\n                  \"id\": 1,\n                  \"code\": \"FGJ01FOCUB\",\n                  \"name\": \"FOCUS B JR\",\n                  \"category\": \"Tae Kwon Do\",\n                  \"gender\": \"Junior\",\n                  \"color\": \"Black/Black\"\n              }\n          },\n          {\n              \"id\": 2,\n              \"code\": \"I122222\",\n              \"createdAt\": \"2017-12-05T17:31:36.541Z\",\n              \"updatedAt\": \"2017-12-05T17:31:36.541Z\",\n              \"size\": \"47\",\n              \"sku\": {\n                  \"id\": 2,\n                  \"code\": \"FGJ01LATIO\",\n                  \"name\": \"LATIO B\",\n                  \"category\": \"Badminton\",\n                  \"gender\": \"Junior\",\n                  \"color\": \"Black/Black\"\n              }\n          }\n      ]\n  }",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "pagination",
            "description": "<p>Pagination detail</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Internal Server Error",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  success: false,\n  status: \"ERROR\",\n  item: null\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/item.js",
    "groupTitle": "Item",
    "name": "GetApiItemAll"
  },
  {
    "type": "get",
    "url": "item/:code",
    "title": "Detail item",
    "group": "Item",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>item code</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "item",
            "description": "<p>detail item object</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>operation success or not</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "success example",
          "content": "{\n   \"success\": true,\n   \"item\": {\n       \"id\": 11740,\n       \"code\": \"FGW07VALLENBM40\",\n       \"createdAt\": \"2018-02-07T04:55:41.507Z\",\n       \"updatedAt\": \"2018-02-07T04:55:41.507Z\",\n       \"size\": {\n           \"id\": 139,\n           \"name\": \"40\"\n       },\n       \"sku\": {\n           \"id\": 3290,\n           \"code\": \"FGW07VALLENBM\",\n           \"name\": \"VALLEN BM \",\n           \"category\": {\n               \"id\": 24,\n               \"name\": \"FG,W,07\"\n           },\n           \"gender\": {\n               \"id\": 2,\n               \"name\": \"W\"\n           },\n           \"color\": {\n               \"id\": 28,\n               \"name\": \"Tidak tersedia\"\n           }\n       }\n   }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/item.js",
    "groupTitle": "Item",
    "name": "GetItemCode",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>user login token</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "item/export",
    "title": "Export to CSV",
    "group": "Item",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "accessToken",
            "description": "<p>access token for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "File",
            "optional": false,
            "field": "csv",
            "description": "<p>Exported csv</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/item.js",
    "groupTitle": "Item",
    "name": "GetItemExport"
  },
  {
    "type": "post",
    "url": "api/item/create",
    "title": "Create",
    "group": "Item",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>token untuk login user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHBpcmVzSW5NaW51dGVzIjoxNDQwLCJpYXQiOjE1MDcwMzQwNzJ9.je4md5GBuTSFGNivBaT3Ju7-yjVjkVS99WSIiwk7wA4\",\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"barcode\": \"FGJ01FOCUB42\",\n    \"code\": \"FGJ01FOCUB42\",\n    \"size\": \"42\",\n    \"skuId\": \"6\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>code untuk Item</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "barcode",
            "description": "<p>barcode untuk Item</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "size",
            "description": "<p>ukuran item</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "skuId",
            "description": "<p>ID SKU</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>true jika berhasil</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "status",
            "description": "<p>&quot;OK&quot; jika berhasil</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "item",
            "description": "<p>Object</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "success",
          "content": " HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"status\": \"OK\",\n    \"item\": {\n        \"id\": 9,\n        \"code\": \"F0004\",\n        \"size\": 42,\n        \"updatedAt\": \"2017-12-09T11:47:56.426Z\",\n        \"createdAt\": \"2017-12-09T11:47:56.426Z\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Internal Server Error",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  success: false,\n  status: \"ERROR\",\n  item: null\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/item.js",
    "groupTitle": "Item",
    "name": "PostApiItemCreate"
  },
  {
    "type": "post",
    "url": "item/import",
    "title": "Import from CSV",
    "group": "Item",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "File",
            "optional": false,
            "field": "ItemCSV",
            "description": "<p>csv file to be imported</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "importedItems",
            "description": "<p>imported items count</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>operation success or not</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "success example",
          "content": "{\n   \"success\": true,\n   \"message\": \"Imported\",\n   \"importedItems\": 1467\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/item.js",
    "groupTitle": "Item",
    "name": "PostItemImport",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>user login token</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "api/log",
    "title": "Get logs",
    "group": "Log",
    "parameter": {
      "fields": {
        "Query string": [
          {
            "group": "Query string",
            "type": "String",
            "optional": true,
            "field": "search",
            "description": "<p>search by <code>desc</code> field.</p>"
          },
          {
            "group": "Query string",
            "type": "String",
            "optional": true,
            "field": "sortBy",
            "description": "<p>sort by <code>createdAt</code>, or <code>resource</code>.</p>"
          },
          {
            "group": "Query string",
            "type": "String",
            "optional": true,
            "field": "resource",
            "description": "<p>get specific resource (table name).</p>"
          },
          {
            "group": "Query string",
            "type": "Number",
            "optional": true,
            "field": "resourceID",
            "description": "<p>get specific resource ID (can be used without resource param).</p>"
          },
          {
            "group": "Query string",
            "type": "String",
            "optional": true,
            "field": "sortDirection",
            "defaultValue": "ASC",
            "description": "<p>sort in ascending or descending. Available: <code>ASC</code> and <code>DESC</code></p>"
          },
          {
            "group": "Query string",
            "type": "Number",
            "optional": true,
            "field": "limit",
            "defaultValue": "10",
            "description": "<p>limit size object per page</p>"
          },
          {
            "group": "Query string",
            "type": "Number",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>number of page to display</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>array of logs.</p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "data.diffPrev",
            "description": "<p>prev changed value.</p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "data.diffNext",
            "description": "<p>next changed value.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "pagination",
            "description": "<p>Pagination detail</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "    HTTP/1.1 200 OK\n    {\n        \"success\": true,\n        \"status\": \"SUCCESS\",\n        \"pagination\": {\n            \"total\": 2,\n            \"pageCount\": 1,\n            \"currentPage\": 1,\n            \"hasNextPage\": false,\n            \"hasPrevPage\": false\n        }\n        \"data\": [\n            {\n                \"id\": 19,\n                \"diffPrev\": {\n                    \"sizeId\": 7\n                },\n                \"diffNext\": {\n                    \"sizeId\": 6\n                },\n                \"op\": \"update\",\n                \"resource\": \"Items\",\n                \"resourceID\": 3,\n                \"desc\": \"edit\",\n                \"ref\": null,\n                \"refID\": null,\n                \"createdAt\": \"2019-09-10T23:33:58.686Z\",\n                \"updatedAt\": \"2019-09-10T23:33:58.687Z\",\n                \"deletedAt\": null\n            },\n            {\n                \"id\": 22,\n                \"diffPrev\": {\n                    \"sizeId\": 6\n                },\n                \"diffNext\": {\n                    \"sizeId\": 7\n                },\n                \"op\": \"update\",\n                \"resource\": \"Items\",\n                \"resourceID\": 3,\n                \"desc\": \"edit\",\n                \"ref\": null,\n                \"refID\": null,\n                \"createdAt\": \"2019-09-11T16:19:31.352Z\",\n                \"updatedAt\": \"2019-09-11T16:19:31.354Z\",\n                \"deletedAt\": null\n            }\n        ],\n}",
          "type": "json"
        }
      ]
    },
    "header": {
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHBpcmVzSW5NaW51dGVzIjoxNDQwLCJpYXQiOjE1MDcwMzQwNzJ9.je4md5GBuTSFGNivBaT3Ju7-yjVjkVS99WSIiwk7wA4\",\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>user login token</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Internal Server Error",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  success: false,\n  status: \"ERROR\",\n  data: null,\n  message: \"error message\",\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/logger.js",
    "groupTitle": "Log",
    "name": "GetApiLog"
  },
  {
    "type": "get",
    "url": "api/output/all",
    "title": "List output",
    "group": "Output",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>token untuk login user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHBpcmVzSW5NaW51dGVzIjoxNDQwLCJpYXQiOjE1MDcwMzQwNzJ9.je4md5GBuTSFGNivBaT3Ju7-yjVjkVS99WSIiwk7wA4\",\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": " HTTP/1.1 200 OK\n {\n\"success\": true,\n\"status\": \"OK\",\n\"output\": [\n    {\n        \"id\": 5,\n        \"deliveryOrderId\": 1,\n        \"innerId\": 7,\n        \"createdAt\": \"2017-11-07T09:49:14.925Z\",\n        \"updatedAt\": \"2017-11-07T09:49:14.925Z\",\n        \"Inner\": {\n            \"id\": 7,\n            \"barcode\": \"1212kj2\",\n            \"itemId\": 3,\n            \"cartonId\": 3,\n            \"isInStok\": true,\n            \"gradeId\": 3,\n            \"sourceId\": 1,\n            \"createdAt\": \"2017-11-04T07:34:03.555Z\",\n            \"updatedAt\": \"2017-11-04T07:34:03.555Z\"\n          },\n        \"DeliveryOrder\": {\n            \"id\": 1,\n            \"number\": \"312312312\",\n            \"createdAt\": \"2017-11-06T12:20:39.116Z\",\n            \"updatedAt\": \"2017-11-06T12:20:39.116Z\"\n          }\n      }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Internal Server Error",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  success: false,\n  status: \"ERROR\",\n  output: null\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/output.js",
    "groupTitle": "Output",
    "name": "GetApiOutputAll"
  },
  {
    "type": "post",
    "url": "api/output/create",
    "title": "Create",
    "group": "Output",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>token untuk login user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHBpcmVzSW5NaW51dGVzIjoxNDQwLCJpYXQiOjE1MDcwMzQwNzJ9.je4md5GBuTSFGNivBaT3Ju7-yjVjkVS99WSIiwk7wA4\",\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"deliveryOrderId\": 1,\n    \"innerId\": 7\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "deliveryOrderId",
            "description": "<p>id deliveryOrder</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "innerId",
            "description": "<p>id inner</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>true jika berhasil</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "status",
            "description": "<p>&quot;OK&quot; jika berhasil</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "output",
            "description": "<p>array dari output</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "success",
          "content": " HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"status\": \"OK\",\n    \"output\": {\n          \"id\": 5,\n          \"deliveryOrderId\": 1,\n          \"innerId\": 7,\n          \"updatedAt\": \"2017-11-07T09:49:14.925Z\",\n          \"createdAt\": \"2017-11-07T09:49:14.925Z\"\n        }\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Internal Server Error",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  success: false,\n  status: \"ERROR\",\n  output: null\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/output.js",
    "groupTitle": "Output",
    "name": "PostApiOutputCreate"
  },
  {
    "type": "get",
    "url": "api/report/all",
    "title": "List",
    "group": "Report",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>token untuk login user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHBpcmVzSW5NaW51dGVzIjoxNDQwLCJpYXQiOjE1MDcwMzQwNzJ9.je4md5GBuTSFGNivBaT3Ju7-yjVjkVS99WSIiwk7wA4\",\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>true jika berhasil</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "status",
            "description": "<p>&quot;OK&quot; jika berhasil</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "report",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "success",
          "content": " HTTP/1.1 200 OK\n{\n     \"success\": true,\n        \"message\": \"Request success\",\n        \"pagination\": {\n            \"total\": 136,\n            \"pageCount\": 14,\n            \"currentPage\": 1,\n            \"hasNextPage\": true,\n            \"hasPrevPage\": false\n        },\n        \"report\": [\n            {\n                \"id\": 17,\n                \"createdAt\": \"2017-12-12T16:56:14.401Z\",\n                \"updatedAt\": \"2017-12-12T16:56:14.401Z\",\n                \"innerReport\": [\n                    {\n                        \"id\": 195,\n                        \"innerId\": 18,\n                        \"createdAt\": \"2018-02-10T08:00:14.384Z\",\n                        \"updatedAt\": \"2018-02-10T08:00:14.384Z\",\n                        \"inner\": {\n                            \"barcode\": \"zxc\",\n                            \"createdAt\": \"2017-12-11T17:32:28.054Z\",\n                            \"updatedAt\": \"2017-12-11T17:32:28.054Z\",\n                            \"item\": {\n                                \"code\": \"I122221\"\n                            },\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Internal Server Error",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  success: false,\n  status: \"ERROR\",\n  report: null\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/report.js",
    "groupTitle": "Report",
    "name": "GetApiReportAll"
  },
  {
    "type": "post",
    "url": "api/report/create",
    "title": "Create",
    "group": "Report",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>token untuk login user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHBpcmVzSW5NaW51dGVzIjoxNDQwLCJpYXQiOjE1MDcwMzQwNzJ9.je4md5GBuTSFGNivBaT3Ju7-yjVjkVS99WSIiwk7wA4\",\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>true jika berhasil</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "status",
            "description": "<p>&quot;OK&quot; jika berhasil</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "report",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "success",
          "content": " HTTP/1.1 200 OK\n{\n   \"success\": true,\n       \"status\": \"OK\",\n       \"message\": \"Create Report Success\",\n       \"report\": {\n           \"id\": 147,\n           \"updatedAt\": \"2018-03-12T14:35:16.771Z\",\n           \"createdAt\": \"2018-03-12T14:35:16.771Z\"\n         }\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Internal Server Error",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  success: false,\n  status: \"ERROR\",\n  report: null\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/report.js",
    "groupTitle": "Report",
    "name": "PostApiReportCreate"
  },
  {
    "type": "get",
    "url": "api/retur/all",
    "title": "List retur",
    "group": "Retur",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>token untuk login user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHBpcmVzSW5NaW51dGVzIjoxNDQwLCJpYXQiOjE1MDcwMzQwNzJ9.je4md5GBuTSFGNivBaT3Ju7-yjVjkVS99WSIiwk7wA4\",\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": " HTTP/1.1 200 OK\n{\n \"success\": true,\n\"status\": \"OK\",\n\"retur\": [\n    {\n        \"id\": 12,\n        \"returnNumber\": \"987hy98123\",\n        \"description\": \"carton rusak\",\n        \"innerId\": 7,\n        \"createdAt\": \"2017-11-06T07:01:32.361Z\",\n        \"updatedAt\": \"2017-11-06T07:01:32.361Z\",\n        \"Inner\": {\n            \"id\": 7,\n            \"barcode\": \"1212kj2\",\n            \"itemId\": 3,\n            \"cartonId\": 3,\n            \"isInStok\": true,\n            \"gradeId\": 3,\n            \"sourceId\": 1,\n            \"createdAt\": \"2017-11-04T07:34:03.555Z\",\n            \"updatedAt\": \"2017-11-04T07:34:03.555Z\"\n        }\n    },\n    {\n        \"id\": 9,\n        \"returnNumber\": \"987hy98123\",\n        \"description\": \"barang returan\",\n        \"innerId\": 7,\n        \"createdAt\": \"2017-11-04T08:51:13.195Z\",\n        \"updatedAt\": \"2017-11-04T08:51:13.195Z\",\n        \"Inner\": {\n            \"id\": 7,\n            \"barcode\": \"1212kj2\",\n            \"itemId\": 3,\n            \"cartonId\": 3,\n            \"isInStok\": true,\n            \"gradeId\": 3,\n            \"sourceId\": 1,\n            \"createdAt\": \"2017-11-04T07:34:03.555Z\",\n            \"updatedAt\": \"2017-11-04T07:34:03.555Z\"\n        }\n    },",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Internal Server Error",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  success: false,\n  status: \"ERROR\",\n  item: null\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/retur.js",
    "groupTitle": "Retur",
    "name": "GetApiReturAll"
  },
  {
    "type": "post",
    "url": "api/retur/create",
    "title": "Create",
    "group": "Retur",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>token untuk login user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHBpcmVzSW5NaW51dGVzIjoxNDQwLCJpYXQiOjE1MDcwMzQwNzJ9.je4md5GBuTSFGNivBaT3Ju7-yjVjkVS99WSIiwk7wA4\",\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"returnNumber\": \"987hy98123\",\n    \"description\": \"karton rusak\",\n    \"innerId\" : \"1\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "returnNumber",
            "description": "<p>nomer retur</p>"
          },
          {
            "group": "Parameter",
            "type": "text",
            "optional": false,
            "field": "description",
            "description": "<p>deskripsi retur</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "innerId",
            "description": "<p>id inner</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>true jika berhasil</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "status",
            "description": "<p>&quot;OK&quot; jika berhasil</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "retur",
            "description": "<p>array dari retur</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "success",
          "content": "HTTP/1.1 200 OK\n{\n  \"success\": true,\n  \"status\": \"OK\",\n  \"retur\": {\n      \"id\": 12,\n      \"returnNumber\": \"987hy98123\",\n      \"description\": \"carton rusak\",\n      \"innerId\": 7,\n      \"updatedAt\": \"2017-11-06T07:01:32.361Z\",\n      \"createdAt\": \"2017-11-06T07:01:32.361Z\"\n    }\n},",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Internal Server Error",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  success: false,\n  status: \"ERROR\",\n  retur: null\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/retur.js",
    "groupTitle": "Retur",
    "name": "PostApiReturCreate"
  },
  {
    "type": "delete",
    "url": "sku/delete",
    "title": "Delete SKU",
    "group": "SKU",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>operation success or not</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "success example",
          "content": "{\n    \"success\": true,\n    \"message\": \"SKU deleted\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/sku.js",
    "groupTitle": "SKU",
    "name": "DeleteSkuDelete",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>user login token</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "sku/all",
    "title": "Get All SKU",
    "group": "SKU",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "search",
            "description": "<p>string to search in <code>sku.name</code> dan <code>sku.code</code> field.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "sortBy",
            "description": "<p>available: <code>updatedAt</code>, <code>code</code>, <code>name</code>.</p>"
          }
        ],
        "Query string": [
          {
            "group": "Query string",
            "type": "String",
            "optional": true,
            "field": "sortDirection",
            "defaultValue": "ASC",
            "description": "<p>sort in ascending or descending. Available: <code>ASC</code> and <code>DESC</code></p>"
          },
          {
            "group": "Query string",
            "type": "Number",
            "optional": true,
            "field": "limit",
            "defaultValue": "10",
            "description": "<p>limit size object per page</p>"
          },
          {
            "group": "Query string",
            "type": "Number",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>number of page to display</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "skus",
            "description": "<p>List of SKU</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "pagination",
            "description": "<p>Pagination detail</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>operation success or not</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "success example",
          "content": "{\n   \"success\": true,\n   \"pagination\": {\n       \"total\": 217,\n       \"pageCount\": 22,\n       \"currentPage\": 1,\n       \"hasNextPage\": true,\n       \"hasPrevPage\": false\n   },\n   \"skus\": [\n       {\n           \"id\": 3260,\n           \"code\": \"FGM07JUNCR\",\n           \"name\": \"JUNCTION R\",\n           \"category\": {\n               \"id\": 21,\n               \"name\": \"FG,M,07\"\n           },\n           \"color\": {\n               \"id\": 53,\n               \"name\": \"WHITE/RED\"\n           },\n           \"gender\": {\n               \"id\": 1,\n               \"name\": \"M\"\n           }\n       }\n   ]\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/sku.js",
    "groupTitle": "SKU",
    "name": "GetSkuAll",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>user login token</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "sku/list",
    "title": "Get SKU list",
    "group": "SKU",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "skus",
            "description": "<p>List of all SKUs</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>operation success or not</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "success example",
          "content": "{\n   \"success\": true,\n   \"skus\": [\n       {\n           \"id\": 3260,\n           \"name\": \"JUNCTION R\"\n       },\n       {\n           \"id\": 3264,\n           \"name\": \"KJS TR\"\n       },\n   ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/sku.js",
    "groupTitle": "SKU",
    "name": "GetSkuList",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>user login token</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "sku/:skuId",
    "title": "Detail SKU",
    "group": "SKU",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "sku",
            "description": "<p>SKU data</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>operation success or not</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "success example",
          "content": "{\n    \"success\": true,\n    \"sku\": {\n        \"id\": 3479,\n        \"code\": \"FGM07KJS3W\",\n        \"name\": \"KJS3 W\",\n        \"createdAt\": \"2018-01-28T13:51:38.390Z\",\n        \"updatedAt\": \"2018-01-28T13:51:38.390Z\",\n        \"category\": {\n            \"id\": 21,\n            \"name\": \"FG,M,07\"\n        },\n        \"color\": {\n            \"id\": 53,\n            \"name\": \"WHITE/RED\"\n        },\n        \"gender\": {\n            \"id\": 1,\n            \"name\": \"M\"\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "not found",
          "content": " {\n    \"success\": true,\n    \"message\": \"SKU not found\",\n    \"sku\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/sku.js",
    "groupTitle": "SKU",
    "name": "GetSkuSkuid",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>user login token</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "sku/create",
    "title": "Create new SKU",
    "group": "SKU",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>SKU code</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>SKU name</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "category",
            "description": "<p>Category</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "color",
            "description": "<p>Color</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "gender",
            "description": "<p>Gender</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "sku",
            "description": "<p>new SKU data</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>operation success or not</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "success example",
          "content": " {\n    \"success\": true,\n    \"sku\": {\n        \"id\": 3503,\n        \"code\": \"FGW04IMUTZB\",\n        \"name\": \"IMUTZ B\",\n        \"categoryId\": 2,\n        \"colorId\": 1,\n        \"genderId\": 2,\n        \"updatedAt\": \"2018-02-26T16:01:20.721Z\",\n        \"createdAt\": \"2018-02-26T16:01:20.721Z\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "SKU already exist",
          "content": "{\n    \"success\": false,\n    \"errors\": [\n        {\n            \"message\": \"code must be unique\",\n            \"type\": \"unique violation\",\n            \"path\": \"code\",\n            \"value\": \"FGW04IMUTZB\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/sku.js",
    "groupTitle": "SKU",
    "name": "PostSkuCreate",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>user login token</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "sku/update",
    "title": "Update an SKU",
    "group": "SKU",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>SKU ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>SKU code</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>SKU name</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "categoryId",
            "description": "<p>Category ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "colorId",
            "description": "<p>Color ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "genderId",
            "description": "<p>Gender ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "sku",
            "description": "<p>updated SKU data</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>operation success or not</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "success example",
          "content": "{\n    \"success\": true,\n    \"sku\": {\n        \"id\": 3497,\n        \"code\": \"FGW04IMUTZB\",\n        \"name\": \"IMUTZ B\",\n        \"categoryId\": \"2\",\n        \"colorId\": \"1\",\n        \"genderId\": \"2\",\n        \"createdAt\": \"2018-01-28T13:51:38.461Z\",\n        \"updatedAt\": \"2018-02-27T16:34:09.634Z\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "SKU code already exist",
          "content": "{\n    \"success\": false,\n    \"errors\": [\n        {\n            \"message\": \"code must be unique\",\n            \"type\": \"unique violation\",\n            \"path\": \"code\",\n            \"value\": \"FGW04IMUTZP\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/sku.js",
    "groupTitle": "SKU",
    "name": "PostSkuUpdate",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>user login token</p>"
          }
        ]
      }
    }
  },
  {
    "type": "delete",
    "url": "size/delete",
    "title": "Delete a size",
    "description": "<p>if an exisiting size is deleted, sizeDeleted will be 1. if no size with given ID, sizeDeleted will be 0.</p>",
    "group": "Size",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>size ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "sizeDeleted",
            "description": "<p>how many size deleted</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>operation success or not</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "success example",
          "content": "{\n   \"success\": true,\n   \"sizeDeleted\": 1\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Constraint Error",
          "content": "{\n\"success\": false,\n\"error\": \"SequelizeForeignKeyConstraintError\",\n\"message\": \"Size with id 4 is being used. Can't perform delete.\"\n}",
          "type": "json"
        },
        {
          "title": "ID not a number",
          "content": "{\n    \"success\": false,\n    \"message\": \"Size ID must be a number\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/size.js",
    "groupTitle": "Size",
    "name": "DeleteSizeDelete",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>user login token</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "size/all",
    "title": "Get all size (paginated)",
    "description": "<p>to use the pagination: size/all?limit=x&amp;page=y</p>",
    "group": "Size",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "sizes",
            "description": "<p>Sizes in current page</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "pagination",
            "description": "<p>Pagination detail</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>operation success or not</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "success example",
          "content": " {\n    \"success\": true,\n    \"pagination\": {\n        \"total\": 2,\n        \"pageCount\": 1,\n        \"currentPage\": 1,\n        \"hasNextPage\": false,\n        \"hasPrevPage\": false\n    },\n    \"sizes\": [\n        {\n            \"id\": 1,\n            \"name\": \"30\",\n            \"createdAt\": \"2017-12-09T12:43:14.000Z\",\n            \"updatedAt\": \"2017-12-09T12:43:14.000Z\"\n        },\n        {\n            \"id\": 2,\n            \"name\": \"31\",\n            \"createdAt\": \"2017-12-09T12:43:14.000Z\",\n            \"updatedAt\": \"2017-12-09T12:43:14.000Z\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/size.js",
    "groupTitle": "Size",
    "name": "GetSizeAll",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>user login token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Query string": [
          {
            "group": "Query string",
            "type": "Number",
            "optional": true,
            "field": "limit",
            "defaultValue": "10",
            "description": "<p>limit size object per page</p>"
          },
          {
            "group": "Query string",
            "type": "Number",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>number of page to display</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "size/:sizeId",
    "title": "Get size detail by ID",
    "description": "<p>if size with given ID not found, the the size object will filled with null.</p>",
    "group": "Size",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "sizeId",
            "description": "<p>size ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "size",
            "description": "<p>size data</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>operation success or not</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "success example",
          "content": "{\n   \"success\": true,\n   \"color\": {\n       \"id\": 1,\n       \"name\": \"30\",\n       \"createdAt\": \"2017-12-09T12:43:14.000Z\",\n       \"updatedAt\": \"2018-01-18T10:30:14.433Z\"\n   }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "ID not a number",
          "content": "{\n    \"success\": false,\n    \"message\": \"Size ID must be a number\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/size.js",
    "groupTitle": "Size",
    "name": "GetSizeSizeid",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>user login token</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "size/create",
    "title": "Create new size",
    "group": "Size",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "name",
            "description": "<p>unit size</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "size",
            "description": "<p>new size data</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>operation success or not</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "success example",
          "content": "{\n    \"success\": true,\n    \"size\": {\n        \"id\": 26,\n        \"name\": \"37\",\n        \"updatedAt\": \"2018-01-18T09:00:39.605Z\",\n        \"createdAt\": \"2018-01-18T09:00:39.605Z\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Empty size",
          "content": "{\n    \"success\": false,\n    \"message\": \"Please don't give blank size\"\n}",
          "type": "json"
        },
        {
          "title": "Size already exist",
          "content": "{\n    \"success\": false,\n    \"message\": \"Operation failed with error(s)\",\n    \"errors\": [\n        {\n            \"message\": \"name must be unique\",\n            \"type\": \"unique violation\",\n            \"path\": \"name\",\n            \"value\": \"1\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/size.js",
    "groupTitle": "Size",
    "name": "PostSizeCreate",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>user login token</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "size/update",
    "title": "update an exisiting size",
    "group": "Size",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>size ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "name",
            "description": "<p>unit size</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "size",
            "description": "<p>updated size data</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>operation success or not</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "success example",
          "content": "{\n    \"success\": true,\n    \"size\": {\n        \"id\": \"1\",\n        \"name\": \"30\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "ID not a number",
          "content": "{\n    \"success\": false,\n    \"message\": \"Size ID must be a number\"\n}",
          "type": "json"
        },
        {
          "title": "No size with given ID",
          "content": "{\n   \"success\": false,\n   \"message\": \"No size with ID 100\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/size.js",
    "groupTitle": "Size",
    "name": "PostSizeUpdate",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>user login token</p>"
          }
        ]
      }
    }
  },
  {
    "type": "delete",
    "url": "api/api/api/user/deactivate",
    "title": "Deactivate user",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "username",
            "description": "<p>username</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "success example",
          "content": "{\n   \"success\": true\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>operation success or not</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/users.js",
    "groupTitle": "User",
    "name": "DeleteApiApiApiUserDeactivate",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>user login token</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "api/user/all",
    "title": "Get all users",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "search",
            "description": "<p>string to search in <code>user.username</code>, and <code>user.name</code> field.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "withDeleted",
            "defaultValue": "false",
            "description": "<p>include deleted (deactivated) user</p>"
          }
        ],
        "Query string": [
          {
            "group": "Query string",
            "type": "Number",
            "optional": true,
            "field": "limit",
            "defaultValue": "10",
            "description": "<p>limit size object per page</p>"
          },
          {
            "group": "Query string",
            "type": "Number",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>number of page to display</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "users",
            "description": "<p>user data</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "pagination",
            "description": "<p>Pagination detail</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>operation success or not</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "success example",
          "content": " {\n    \"success\": true,\n    \"pagination\": {\n        \"total\": 2,\n        \"pageCount\": 1,\n        \"currentPage\": 1,\n        \"hasNextPage\": false,\n        \"hasPrevPage\": false\n    },\n    \"users\": [\n        {\n            \"name\": \"nurul irfan zzz\",\n            \"username\": \"mnirfan\",\n            \"deletedAt\": null,\n            \"hasRole\": true,\n            \"roles\": [\n                \"admin\",\n                \"Serdadu\"\n            ]\n        },\n        {\n            \"name\": \"nurul\",\n            \"username\": \"nurul\",\n            \"deletedAt\": \"2018-04-16T13:21:18.728Z\",\n            \"hasRole\": false,\n            \"roles\": []\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/users.js",
    "groupTitle": "User",
    "name": "GetApiUserAll",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>user login token</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "api/user/me",
    "title": "Get current user detail",
    "group": "User",
    "success": {
      "examples": [
        {
          "title": "success",
          "content": "{\n  \"success\": true,\n  \"user\": {\n      \"id\": 1,\n      \"name\": \"Nurul Irfan\",\n      \"username\": \"mnirfan\",\n      \"email\": \"hello@nurulirfan.com\",\n      \"identityNumber\": \"A11.2014.08363\",\n      \"roles\": [\n          \"admin\"\n      ]\n  }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/users.js",
    "groupTitle": "User",
    "name": "GetApiUserMe",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>user login token</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "api/user/refresh-token",
    "title": "refresh access token",
    "group": "User",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>new access token</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "expiresAt",
            "description": "<p>token expire date in UNIX epoch format</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>operation success or not</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "success example",
          "content": "{\n   \"success\": true,\n   \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTUyMTI5ODA1MiwiZXhwIjoxNTIxMzg0NDUyfQ.79u25p0iHyHis7KIdOmq7fC0_PESg4MzYXREJF_8uWY\",\n   \"expiresAt\": 1525700890\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/users.js",
    "groupTitle": "User",
    "name": "GetApiUserRefreshToken",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>user login token</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "api/user/:username",
    "title": "Get user detail",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>username</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "success",
          "content": " {\n   \"success\": true,\n   \"user\": {\n       \"id\": 1,\n       \"name\": \"Nurul Irfan\",\n       \"username\": \"mnirfan\",\n       \"email\": \"hello@nurulirfan.com\",\n       \"identityNumber\": \"A11.2014.08363\",\n       \"roles\": [\n           \"admin\"\n       ]\n   }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "User not found",
          "content": " {\n    \"success\": false,\n    \"message\": \"User irfan not found\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/users.js",
    "groupTitle": "User",
    "name": "GetApiUserUsername",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>user login token</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "api/api/api/api/user/reactivate",
    "title": "Reactivate user",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "username",
            "description": "<p>username</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "success example",
          "content": "{\n   \"success\": true\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>operation success or not</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/users.js",
    "groupTitle": "User",
    "name": "PostApiApiApiApiUserReactivate",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>user login token</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "api/api/user/update",
    "title": "Update user detail",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>nama pengguna</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "username",
            "description": "<p>username pengguna</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "identityNumber",
            "description": "<p>nomer induk pengguna</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>password pengguna</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>email pengguna</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "success example",
          "content": "{\n   \"success\": true\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>operation success or not</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/users.js",
    "groupTitle": "User",
    "name": "PostApiApiUserUpdate",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>user login token</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "api/user/create",
    "title": "Add new user",
    "group": "User",
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"name\" : \"jhon doe\",\n  \"username\" : \"jhondoe\",\n  \"password\" : \"secret\",\n  \"email\" : \"jhondoe@example.co.id\",\n  \"warehouseId\" : 1,\n  \"identityNumber\" : \"113211019\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>nama pengguna</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "username",
            "description": "<p>username pengguna</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>password pengguna</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>email pengguna</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "warehouseId",
            "description": "<p>id warehouse</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "identityNumber",
            "description": "<p>nomer induk pengguna</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>true jika berhasil</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "status",
            "description": "<p>&quot;OK&quot; jika berhasil</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "user",
            "description": "<p>array dari user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "  HTTP/1.1 200 OK\n{\n \"success\": true,\n \"status\": \"OK\",\n \"user\": {\n     \"id\": 6,\n     \"username\": \"jhondoe\",\n     \"name\": \"jhon doe\",\n     \"warehouseId\": 1,\n     \"identityNumber\": \"113211019\",\n     \"email\" : \"jhondoe@example.co.id\",\n     \"updatedAt\": \"2017-10-27T07:12:18.295Z\",\n     \"createdAt\": \"2017-10-27T07:12:18.295Z\"\n   }\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Internal Server Error",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  success: false,\n  status: \"ERROR\",\n  user: null\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/users.js",
    "groupTitle": "User",
    "name": "PostApiUserCreate"
  },
  {
    "type": "get",
    "url": "api/warehouse/all",
    "title": "List warehouse",
    "group": "Warehouse",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>token untuk login user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHBpcmVzSW5NaW51dGVzIjoxNDQwLCJpYXQiOjE1MDcwMzQwNzJ9.je4md5GBuTSFGNivBaT3Ju7-yjVjkVS99WSIiwk7wA4\",\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n   \"id\": 1,\n   \"name\": \"warehouse a\",\n   \"address\": \"jl lorem ipsum bla bla bla\",\n   \"createdAt\": \"2017-10-27T10:04:43.681Z\",\n   \"updatedAt\": \"2017-10-27T10:04:43.681Z\",\n   \"Cartons\": [\n       {\n           \"id\": 7,\n           \"barcode\": \"1212kj2\",\n           \"warehouseId\": 1,\n           \"createdAt\": \"2017-10-27T10:31:04.431Z\",\n           \"updatedAt\": \"2017-10-27T10:31:04.431Z\"\n       },\n       {\n           \"id\": 9,\n           \"barcode\": \"1231231\",\n           \"warehouseId\": 1,\n           \"createdAt\": \"2017-10-30T05:14:33.876Z\",\n           \"updatedAt\": \"2017-10-30T05:14:33.876Z\"\n       }\n   ]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Internal Server Error",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  success: false,\n  status: \"ERROR\",\n  warehouse: null\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/warehouse.js",
    "groupTitle": "Warehouse",
    "name": "GetApiWarehouseAll"
  },
  {
    "type": "post",
    "url": "api/warehouse/create",
    "title": "Create",
    "group": "Warehouse",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>token untuk login user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHBpcmVzSW5NaW51dGVzIjoxNDQwLCJpYXQiOjE1MDcwMzQwNzJ9.je4md5GBuTSFGNivBaT3Ju7-yjVjkVS99WSIiwk7wA4\",\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"name\": \"Warehouse B\",\n    \"address\": \"jl lorem ipsum bla bla bla\",\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>nama warehouse</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "address",
            "description": "<p>alamat warehouse</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>true jika berhasil</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "status",
            "description": "<p>&quot;OK&quot; jika berhasil</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "warehouse",
            "description": "<p>array dari warehouse</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "success",
          "content": "   HTTP/1.1 200 OK\n  \"success\": true,\n  \"status\": \"OK\",\n  \"warehouse\": {\n    \"id\": 5,\n    \"name\": \"Warehouse B\",\n    \"address\": \"jl lorem ipsum bla bla bla\",\n    \"updatedAt\": \"2017-10-30T05:57:50.643Z\",\n    \"createdAt\": \"2017-10-30T05:57:50.643Z\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Internal Server Error",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  success: false,\n  status: \"ERROR\",\n  warehouse: null\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/warehouse.js",
    "groupTitle": "Warehouse",
    "name": "PostApiWarehouseCreate"
  },
  {
    "type": "delete",
    "url": "innergrade/delete",
    "title": "Delete warehouse",
    "group": "inner_Grade",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "id",
            "description": "<p>id inner grade</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>operation success or not</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "success example",
          "content": "{\n    \"success\": true,\n    \"message\": \"innerGrade deleted\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/innergrade.js",
    "groupTitle": "inner_Grade",
    "name": "DeleteInnergradeDelete",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>user login token</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "innergrade/update",
    "title": "Update a innergrade",
    "group": "inner_Grade",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>innergrade ID</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>nama innergrade</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "innerGrade",
            "description": "<p>updated innergrade data</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>operation success or not</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "success example",
          "content": "{\n      \"success\": true,\n      \"message\": ''Update innerGrade with id 2 success'',\n      \"warehouse\": {\n            \"id\": 1,\n            \"name\": \"Grade A\",\n            \"createdAt\": \"2018-03-21T14:44:18.006Z\",\n            \"updatedAt\": \"2018-03-21T14:44:18.006Z\"\n     }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "innerGrade name already exist",
          "content": "{\n    \"success\": false,\n    \"innerGrade\": warehouse with id 12 not found\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/innergrade.js",
    "groupTitle": "inner_Grade",
    "name": "PostInnergradeUpdate",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>user login token</p>"
          }
        ]
      }
    }
  },
  {
    "type": "delete",
    "url": "profile/delete",
    "title": "Delete profile",
    "group": "profile",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "id",
            "description": "<p>id profile</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>operation success or not</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "success example",
          "content": "{\n    \"success\": true,\n    \"message\": \"profile deleted\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/profile.js",
    "groupTitle": "profile",
    "name": "DeleteProfileDelete",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>user login token</p>"
          }
        ]
      }
    }
  },
  {
    "type": "delete",
    "url": "profile/:id",
    "title": "Detail profile",
    "group": "profile",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "id",
            "description": "<p>id profile</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "profile",
            "description": "<p>profile data</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>operation success or not</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "success example",
          "content": "{\n    \"success\": true,\n    \"profile\": {\n        \"id\": 17,\n        \"name\": \"Assort 1\",\n        \"mixAmount\": null,\n        \"type\": \"assort\",\n        \"createdAt\": \"2018-08-05T14:03:13.689Z\",\n        \"updatedAt\": \"2018-08-05T14:03:13.689Z\",\n        \"profileItem\": [\n            {\n                \"id\": 8,\n                \"itemId\": 10314,\n                \"amount\": 4,\n                \"item\": {\n                    \"id\": 10314,\n                    \"code\": \"FGJ01SUPERB35\",\n                    \"sizeId\": 133,\n                    \"skuId\": 3308,\n                    \"barcode\": \"FGJ01SUPERB35\",\n                    \"sku\": {\n                        \"id\": 3308,\n                        \"code\": \"FGJ01SUPERB\",\n                        \"name\": \"SUPER STAR B JR\",\n                        \"categoryId\": 13,\n                        \"colorId\": 23,\n                        \"genderId\": 3\n                    },\n                    \"size\": {\n                        \"id\": 133,\n                        \"name\": \"35\"\n                    }\n                }\n            },\n            {\n                \"id\": 7,\n                \"itemId\": 10310,\n                \"amount\": 8,\n                \"item\": {\n                    \"id\": 10310,\n                    \"code\": \"FGJ01SUPERB31\",\n                    \"sizeId\": 2,\n                    \"skuId\": 3308,\n                    \"barcode\": \"FGJ01SUPERB31\",\n                    \"sku\": {\n                        \"id\": 3308,\n                        \"code\": \"FGJ01SUPERB\",\n                        \"name\": \"SUPER STAR B JR\",\n                        \"categoryId\": 13,\n                        \"colorId\": 23,\n                        \"genderId\": 3\n                    },\n                    \"size\": {\n                        \"id\": 2,\n                        \"name\": \"31\"\n                    }\n                }\n            }\n        ]\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Internal Server Error",
          "content": " {\n    \"success\": false,\n    \"message\": \"...\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/profile.js",
    "groupTitle": "profile",
    "name": "DeleteProfileId",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>user login token</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "api/profile/list",
    "title": "List profile",
    "group": "profile",
    "header": {
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHBpcmVzSW5NaW51dGVzIjoxNDQwLCJpYXQiOjE1MDcwMzQwNzJ9.je4md5GBuTSFGNivBaT3Ju7-yjVjkVS99WSIiwk7wA4\",\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>user login token</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n  {\n      \"success\": true,\n      \"profiles\": [\n        {\n          \"id\": 4,\n          \"name\": \"Solid Super STAR\",\n          \"mixAmount\": null,\n          \"type\": \"solid\",\n          \"createdAt\": \"2018-07-29T13:03:40.000Z\",\n          \"updatedAt\": \"2018-07-29T13:03:40.000Z\",\n          \"profileItem\": [\n            {\n              \"itemId\": 10310,\n              \"amount\": 12,\n              \"item\": {\n                \"skuId\": 3308,\n                \"sizeId\": 2,\n                \"sku\": {\n                  \"name\": \"SUPER STAR B JR\"\n                },\n                \"size\": {\n                  \"name\": \"31\"\n                }\n              }\n            }\n          ]\n        }\n      ]\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Internal Server Error",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  success: false,\n  error: {}\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/profile.js",
    "groupTitle": "profile",
    "name": "GetApiProfileList"
  },
  {
    "type": "post",
    "url": "api/profile/create",
    "title": "Create",
    "group": "profile",
    "header": {
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHBpcmVzSW5NaW51dGVzIjoxNDQwLCJpYXQiOjE1MDcwMzQwNzJ9.je4md5GBuTSFGNivBaT3Ju7-yjVjkVS99WSIiwk7wA4\",\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>user login token</p>"
          }
        ]
      }
    },
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"count\": 10\n    \"type\": solid\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "count",
            "description": "<p>jumlah sepatu dalam carton</p>"
          },
          {
            "group": "Parameter",
            "type": "enum",
            "optional": false,
            "field": "type",
            "description": "<p>type profile (solid,mix)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "created",
            "description": "<p>profile object</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>operation success or not</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "success",
          "content": "HTTP/1.1 200 OK\n{\n        \"success\": true,\n        \"profile\": {\n        \"message\": \"Create success\"\n            \"id\": 2,\n            \"count\": 12,\n            \"type\": \"mix\",\n            \"updatedAt\": \"2018-03-21T14:45:37.969Z\",\n            \"createdAt\": \"2018-03-21T14:45:37.969Z\"\n},",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Internal Server Error",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  success: false,\n  status: \"ERROR\",\n  item: null\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/profile.js",
    "groupTitle": "profile",
    "name": "PostApiProfileCreate"
  },
  {
    "type": "post",
    "url": "profile/update",
    "title": "Update a profile",
    "group": "profile",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>profile ID</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "count",
            "description": "<p>jumlah sepatu dalam carton</p>"
          },
          {
            "group": "Parameter",
            "type": "enum",
            "optional": false,
            "field": "type",
            "description": "<p>type profile (solid,mix)</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "cartonId",
            "description": "<p>id carton</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "profile",
            "description": "<p>updated profile data</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>operation success or not</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "success example",
          "content": "{\n      \"success\": true,\n      \"message\": 'Update Success',\n      \"profile\": {\n         \"id\": 2,\n         \"count\": \"10\",\n         \"type\": \"mix\",\n         \"createdAt\": \"2018-03-21T14:45:37.969Z\",\n         \"updatedAt\": \"2018-03-21T15:04:37.347Z\"\n     }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "profile name already exist",
          "content": "{\n    \"success\": false,\n    \"profile\": {\n\n         }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/profile.js",
    "groupTitle": "profile",
    "name": "PostProfileUpdate",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>user login token</p>"
          }
        ]
      }
    }
  },
  {
    "type": "delete",
    "url": "warehouse/delete",
    "title": "Delete warehouse",
    "group": "warehouse",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "id",
            "description": "<p>id warehouse</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>operation success or not</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "success example",
          "content": "{\n    \"success\": true,\n    \"message\": \"warehouse deleted\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/warehouse.js",
    "groupTitle": "warehouse",
    "name": "DeleteWarehouseDelete",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>user login token</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "warehouse/:id",
    "title": "Detail warehouse",
    "group": "warehouse",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "warehouse",
            "description": "<p>warehouse data</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>operation success or not</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "success example",
          "content": "{\n    \"success\": true,\n    \"warehouse\": {\n                \"id\": 1,\n                \"name\": \"Warehouse A\",\n                \"address\": \"Bulustalan IV\",\n                \"createdAt\": \"2018-03-21T14:44:18.006Z\",\n                \"updatedAt\": \"2018-03-21T14:44:18.006Z\"\n            },\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "not found",
          "content": " {\n    \"success\": false,\n    \"message\": \"warehouse not found\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/warehouse.js",
    "groupTitle": "warehouse",
    "name": "GetWarehouseId",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>user login token</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "warehouse/update",
    "title": "Update a warehouse",
    "group": "warehouse",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>warehouse ID</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>nama warehouse</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "address",
            "description": "<p>alamat warehouse</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "warehouse",
            "description": "<p>updated warehouse data</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>operation success or not</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "success example",
          "content": "{\n      \"success\": true,\n      \"message\": ''Update warehouse with id 2 success'',\n      \"warehouse\": {\n            \"id\": 1,\n            \"name\": \"Warehouse AB\",\n            \"address\": \"Bulustalan IV\",\n            \"createdAt\": \"2018-03-21T14:44:18.006Z\",\n            \"updatedAt\": \"2018-03-21T14:44:18.006Z\"\n     }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "warehouse name already exist",
          "content": "{\n    \"success\": false,\n    \"warehouse\": {\n\n         }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/warehouse.js",
    "groupTitle": "warehouse",
    "name": "PostWarehouseUpdate",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>user login token</p>"
          }
        ]
      }
    }
  }
] });
