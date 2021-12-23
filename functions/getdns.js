/*
  https://explorers.netlify.com/learn/up-and-running-with-serverless-functions/introduction-with-serverless-functions
  Serverless functions
  Can be used for complex functions
  To call a serverless function send a request to <hostname>/.netlify/functions/<filename (without extension)>
*/
import dns from "dns";
exports.handler = /*async (if await is needed)*/(event, context, callback /* Return data */) => {
  dns.resolve(event.queryStringParameters.hostname, 'ANY', (err, records) => {
    callback(err, {
      statusCode: 200,
      body: JSON.stringify(records),
    });
  });
};