// === [Layer Control] Please only use small cap letter here only, example: Don't use Lat, use lat===
	window.expectedHeaders = {
		latitude: ['lat','latitude','lat1','北緯','緯度'], //Mandatory.
		longitude: ['long','longitude','lng','lon','東經','經度'], //Mandatory.
		azimuth: ['azimuth', 'direction','antenna direction','天線方位角','方位角'], //Mandatory.
		type: ['coveragetype', 'coverage', 'type','Coverage_Objective','cellos'], //Mandatory. Needed to draw outdoor and indoor cells differently
		site_id: ['site id','site_id', 'siteid','gnb id'], //Mandatory. 
		cell_id: ['cell_id', 'cellid','cell id','cid','cellidentity','cell identity'], //Mandatory.
		multilayer: ['band','technology','multilayers', 'multi_layer', 'layer'], //Mandatory. Needed to draw different layers in map
		site_name: ['site_name', 'sitename', 'site name','cellname','cell_name','cell name'], //Optional. If available can be use in search function.
		beamwidth: ['beamwidth', 'bw'] //Optional. If column is not found, 30 deg will be used.
		};
		
	window.indoorValues = ["indoor", "室内涵蓋", "in", "inbuilding"]; //Mandatory. If these string are found, cell will be drawn as indoor cell.

	window.expectedNeighborHeaders = {
        source_cell_id: ['source_cell_id', 'sourceid', 'source_cell', 'src_cell','source cell','source'],
        target_cell_id: ['target_cell_id', 'targetid', 'target_cell', 'tgt_cell','target cell','target'],
        type: ['type', 'relation_type', 'ho_type', 'handover_type','intra/inter'],
        handover_att: ['handover_att', 'ho_attempts', 'attempts', 'att', 'attempt']
        };

  // 🔧 Change this to any valid column name to group site markers differently
  window.siteMarkerGroupBy = "site_id";  // e.g., "site_name", "cell_id", etc.
  // 🔧 Set to true to allow duplicate group values at different lat/lng to draw separate dots
  window.allowMultipleDotsPerGroup = true;

  window.neighborDistanceRanges = [
  { max: 1, color: '#ff0000' },    // 0-1 km Red
  { max: 3, color: '#e01ce3' },   // 1-3 km Purple
  { max: 5, color: '#75d3e6' },   // 3-5 km Light Blue
  { max: 10, color: '#00ff00' },   // 5-10 km Green
  { max: 20, color: '#00ffff' },   // 10-20 km Cyan
  { max: 9999, color: '#0000ff' }  // >20 km Blue
];

// ===== Draw label zoom level =====
window.labelZoomThreshold = 15; // Minimum zoom level for labels to appear, change to smaller values for label to show when zoom out.