export default class HtmlService {

    static transformStringHtmlToHtml(input) {
        var e = document.createElement('div');
        e.innerHTML = input;
        return e.outerHTML;
    }
}