/**
 * sandbox-dev
 * src/main.js
 * 
 * a simple Google Apps Script webapp
 *
 */

/**
 * handle HTTP GET requests
 * 
 * @param GoogleAppsScript.Events.DoGet simple trigger
 * @returns {GoogleAppsScript.HTML.HtmlOutput} html page to be returned to requesting web client
 */
function doGet(e:GoogleAppsScript.Events.DoGet): GoogleAppsScript.HTML.HtmlOutput {
  e = e || {};
  return renderHtmlResponse(e)
  .addMetaTag("viewport","width=device-width, initial-scale=1.0")
  .setHeight(600)
  .setWidth(400);
}

/**
 * route specific HTML content back to doGet()
 * 
 * @param GoogleAppsScript.Events.DoGet 
 * @returns {GoogleAppsScript.HTML.HtmlOutput} specified by `route` parameter passed into the GET request
 */
function renderHtmlResponse(e:GoogleAppsScript.Events.DoGet): GoogleAppsScript.HTML.HtmlOutput {
  const template = HtmlService.createTemplateFromFile('html/app');
  template.route = e.parameter?.route || 'home';
  template.doGetEventObj = e;
  return template.evaluate()
}