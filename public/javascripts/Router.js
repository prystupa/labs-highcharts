/**
 * Created with IntelliJ IDEA.
 * User: eprystupa
 * Date: 8/31/12
 * Time: 9:35 PM
 */

define(['views/BarChartView'], function (BarChartView) {
    return Backbone.Router.extend({

        routes:{
            "bar":"bar"
        },

        bar:function () {
            this._renderPage(BarChartView);
        },

        _renderPage:function (View) {
            var view = new View();
            $('body').html(view.el);
            view.render();
        }
    });
});