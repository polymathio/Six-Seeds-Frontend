var ads = {

  // formatId: 31221, fixed sidebar
  // formatId: 31210, wide banner
  // formatId: 31212, sidebar square

  init: function() {
    //console.log('ads init');

    /*var sas = sas || {}; 
    sas.cmd = sas.cmd || []; */
    
    sas.cmd.push(function() { 
      /*sas.call("std", { 
        siteId: 71012, 
        pageId: 537314, 
        formatId: 31210,
        target: 'path=AdditionalResources;path=Portals;path=Atheist;path=MinorPathIndex;path=NonReligiousPaths;path=Agnosticism;path=Atheism;path=SecularHumanism;Channel=CFT_Atheist;pathNumbers=2465;pathNumbers=142;pathNumbers=143;pathNumbers=144;urlhash=1286045419;',
        tagId: '31210'
      });*/

      /*sas.call("std", { 
        siteId: 71012, 
        pageId: 537314, 
        formatId: 31221,
        target: 'path=AdditionalResources;path=Portals;path=Atheist;path=MinorPathIndex;path=NonReligiousPaths;path=Agnosticism;path=Atheism;path=SecularHumanism;Channel=CFT_Atheist;pathNumbers=2465;pathNumbers=142;pathNumbers=143;pathNumbers=144;urlhash=1286045419;',
        tagId: '1234'
      }); */

    });

  }
}

module.exports = ads;