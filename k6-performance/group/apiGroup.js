import { check, group } from "k6";
import http from "k6/http";

export default function apiGroup() {
  group("Http Get Performance", function () {
    //get List
    const resListObjects = http.get("https://api.restful-api.dev/objects");
    check(resListObjects, {
      "get all products status": (r) => r.status === 200,
    });

    //get list by ID
    const resListById = http.get(
      "https://api.restful-api.dev/objects?id=3&id=5&id=10"
    );
    check(resListById, {
      "get by id status": (r) => r.status === 200,
    });

    //get single data
    const resSingleObject = http.get("https://api.restful-api.dev/objects/7");
    check(resSingleObject, {
      "get single product status": (r) => r.status === 200,
    });
  });

  group("Http Post,Put,Patch performance", function () {
    //id for put and patch
    let newId = "ff8081818ad150c5018b05575cd6345e";

    //post
    let postPayload = {
      name: "Apple MacBook Pro 16",
      data: {
        year: 2019,
        price: 1849.99,
        "CPU model": "Intel Core i9",
        "Hard disk size": "1 TB",
      },
    };
    const resAddObject = http.post(
      "https://api.restful-api.dev/objects",
      postPayload
    );
    check(resAddObject, {
      "Add product status": (r) => r.status === 200,
    });

    //put (update)
    let putPayload = {
      name: "Apple MacBook Pro 16",
      data: {
        year: 2019,
        price: 2049.99,
        "CPU model": "Intel Core i9",
        "Hard disk size": "1 TB",
        color: "silver",
      },
    };

    const resUpdateObject = http.put(
      "https://api.restful-api.dev/objects/" + newId,
      putPayload
    );
    check(resUpdateObject, {
      "Update product status": (r) => r.status === 200,
    });

    //patch
    let patchPayload = {
      name: "Apple MacBook Pro 16 (Updated Name)",
    };

    const resPacthObject = http.patch(
      "https://api.restful-api.dev/objects/" + newId,
      patchPayload
    );

    check(resPacthObject, {
      "Patch product status": (r) => r.status === 200,
    });
  });

  group("Delete product", function () {
    let delId = "ff8081818ad150c5018b0561e161346d";
    const resDelete = http.del("https://api.restful-api.dev/objects/" + delId);
    check(resDelete, {
      "Delete product status": (r) => r.status === 200,
    });
  });
}
