/**
 * sandbox-dev
 * src/main.js
 *
 */

function greet(person: string): string {
  const msg = `Hello, ${person}!`;
	console.log(msg);
  return msg;
}

/**
 * handle HTTP GET requests
 * 
 * @returns {GoogleAppsScript.HTML.HtmlOutput}
 */
function doGet(e:GoogleAppsScript.Events.DoGet): GoogleAppsScript.HTML.HtmlOutput {
  e = e || {};
  const template = HtmlService.createTemplate('<h1>Hello world!</h1><pre><?= data ?></pre>');
  template.data = JSON.stringify(e);
  return template.evaluate()
    .setTitle('sandbox-dev');
}
