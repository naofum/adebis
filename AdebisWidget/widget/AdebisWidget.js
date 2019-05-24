define([
    "dojo/_base/declare",
    "mxui/widget/_WidgetBase",

    "dojo/_base/lang"


], function (declare, _WidgetBase, lang) {
    "use strict";

    return declare("AdebisWidget.widget.AdebisWidget", [ _WidgetBase ], {


        // Internal variables.
        _handles: null,
        _contextObj: null,

        constructor: function () {
            this._handles = [];
        },

        postCreate: function () {
            logger.debug(this.id + ".postCreate");
        },

        update: function (obj, callback) {
            logger.debug(this.id + ".update");
            this._insertAdebis();

            this._contextObj = obj;
            callback();
        },

        _insertAdebis: function () {
            logger.debug(this.id + "._insertAdebis");

            // 1. create iframe to load a library
            var iframe = document.createElement('iframe');
            var head = document.getElementsByTagName('head')[0];
            head.appendChild(iframe);
            
            var html = '<body><script src="https://ac.ebis.ne.jp/ct_tag.php?argument=' + this.argument + '"><\/script><\/body>';
            var iframeDocument = iframe.contentWindow.document;
            iframeDocument.open();
            iframeDocument.write(html);
            iframeDocument.close();
        },

    });
});

require(["AdebisWidget/widget/AdebisWidget"]);
