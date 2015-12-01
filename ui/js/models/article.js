/**
 * Created by kevin on 10/25/2015.
 */

/**
 * Created by kevin on 10/25/2015.
 */

define(['underscore', 'backbone', 'loglevel'],

    function(_, Backbone, log){

        var Article = Backbone.Model.extend({



            // Model constructor
            initialize: function() {
                //log.info('model init');


            },


            getTitles : function(){
                var result = {};

                var sections = this.get('sections');

                if (_.isString(this.get('title'))){
                    result.title = this.get('title');
                }
                if (_.isArray(sections)){
                    var section_titles = [];
                    _.each(sections, function(section, idx){
                        if (_.isObject(section) && _.has(section, 'heading') && _.isString(section.heading)){
                            section_titles.push(section.heading)
                        }

                    });
                    if (section_titles.length){
                       result.sections = section_titles;
                    }
                }


                return result;
            },





        });

        // Returns the Model class
        return Article;

    }

);
