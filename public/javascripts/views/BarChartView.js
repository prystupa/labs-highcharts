/**
 * Created with IntelliJ IDEA.
 * User: eprystupa
 * Date: 8/31/12
 * Time: 9:28 PM
 */

define([], function () {

    return Backbone.View.extend({

        render:function () {

            this.$el.html('<div class="chart"></div>');

            new Highcharts.Chart({
                chart:{
                    renderTo:this.$('.chart').get(0),
                    type:'bar'
                },

                series:[
                    {
                        name:'Jane',
                        data:[1, 0, 4]
                    },
                    {
                        name:'Jon',
                        data:[5, 7, 3]
                    }
                ]
            });
        }
    });
});