/**
 * Created with IntelliJ IDEA.
 * User: eprystupa
 * Date: 8/31/12
 * Time: 9:22 PM
 */

define(['./Router'], function (Router) {

    $(function () {
        new Router();
        Backbone.history.start();
    });
});