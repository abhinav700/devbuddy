type KeyValuePair = {
  key: string;
  value: string;
  checked: boolean;
}

type RequestFormData = {
  "params": keyValuePair[],
  "headers": KeyValuePair[],
  "body": string,
  "method": "GET" | "POST" | "PUT" | "DELETE",
}