// autogenerated by sql-generate v1.1.0 on Tue Mar 22 2016 12:16:23 GMT+0100 (CET)

var sql = require('sql');


/**
 * SQL definition for public.categories
 */
exports.categories = sql.define({
	name: 'categories',
	columns: [
		{ name: 'created_at' },
		{ name: 'updated_at' },
		{ name: 'id' },
		{ name: 'name' },
		{ name: 'objects' },
		{ name: 'color' }
	]
});


/**
 * SQL definition for public.geography_columns
 */
exports.geography_columns = sql.define({
	name: 'geography_columns',
	columns: [
		{ name: 'f_table_catalog' },
		{ name: 'f_table_schema' },
		{ name: 'f_table_name' },
		{ name: 'f_geography_column' },
		{ name: 'coord_dimension' },
		{ name: 'srid' },
		{ name: 'type' }
	]
});


/**
 * SQL definition for public.geometry_columns
 */
exports.geometry_columns = sql.define({
	name: 'geometry_columns',
	columns: [
		{ name: 'f_table_catalog' },
		{ name: 'f_table_schema' },
		{ name: 'f_table_name' },
		{ name: 'f_geometry_column' },
		{ name: 'coord_dimension' },
		{ name: 'srid' },
		{ name: 'type' }
	]
});


/**
 * SQL definition for public.lifecycle
 */
exports.lifecycle = sql.define({
	name: 'lifecycle',
	columns: [
		{ name: 'created_at' },
		{ name: 'updated_at' }
	]
});


/**
 * SQL definition for public.networks
 */
exports.networks = sql.define({
	name: 'networks',
	columns: [
		{ name: 'created_at' },
		{ name: 'updated_at' },
		{ name: 'id' },
		{ name: 'name' },
		{ name: 'sources' },
		{ name: 'color' },
		{ name: 'url' }
	]
});


/**
 * SQL definition for public.osmplaces
 */
exports.osmplaces = sql.define({
	name: 'osmplaces',
	columns: [
		{ name: 'created_at' },
		{ name: 'updated_at' },
		{ name: 'id' },
		{ name: 'osm_id' },
		{ name: 'name' },
		{ name: 'category' },
		{ name: 'subcategories' },
		{ name: 'operator' },
		{ name: 'source' },
		{ name: 'recycling_type' },
		{ name: 'opening_hours' },
		{ name: 'lat' },
		{ name: 'lon' },
		{ name: 'network' },
		{ name: 'geom' }
	]
});


/**
 * SQL definition for public.places
 */
exports.places = sql.define({
	name: 'places',
	columns: [
		{ name: 'created_at' },
		{ name: 'updated_at' },
		{ name: 'id' },
		{ name: 'name' },
		{ name: 'type' },
		{ name: 'pheromon_id' },
		{ name: 'dechet_non_dangereux' },
		{ name: 'opening_hours' },
		{ name: 'phone' },
		{ name: 'website' },
		{ name: 'objects' },
		{ name: 'bins' },
		{ name: 'address_1' },
		{ name: 'address_2' },
		{ name: 'owner' },
		{ name: 'network' },
		{ name: 'public_access' },
		{ name: 'dechet_dangereux' },
		{ name: 'dechet_inerte' },
		{ name: 'pro_access' },
		{ name: 'lat' },
		{ name: 'lon' },
		{ name: 'geom' }
	]
});


/**
 * SQL definition for public.raster_columns
 */
exports.raster_columns = sql.define({
	name: 'raster_columns',
	columns: [
		{ name: 'r_table_catalog' },
		{ name: 'r_table_schema' },
		{ name: 'r_table_name' },
		{ name: 'r_raster_column' },
		{ name: 'srid' },
		{ name: 'scale_x' },
		{ name: 'scale_y' },
		{ name: 'blocksize_x' },
		{ name: 'blocksize_y' },
		{ name: 'same_alignment' },
		{ name: 'regular_blocking' },
		{ name: 'num_bands' },
		{ name: 'pixel_types' },
		{ name: 'nodata_values' },
		{ name: 'out_db' },
		{ name: 'extent' },
		{ name: 'spatial_index' }
	]
});


/**
 * SQL definition for public.raster_overviews
 */
exports.raster_overviews = sql.define({
	name: 'raster_overviews',
	columns: [
		{ name: 'o_table_catalog' },
		{ name: 'o_table_schema' },
		{ name: 'o_table_name' },
		{ name: 'o_raster_column' },
		{ name: 'r_table_catalog' },
		{ name: 'r_table_schema' },
		{ name: 'r_table_name' },
		{ name: 'r_raster_column' },
		{ name: 'overview_factor' }
	]
});


/**
 * SQL definition for public.spatial_ref_sys
 */
exports.spatial_ref_sys = sql.define({
	name: 'spatial_ref_sys',
	columns: [
		{ name: 'srid' },
		{ name: 'auth_name' },
		{ name: 'auth_srid' },
		{ name: 'srtext' },
		{ name: 'proj4text' }
	]
});


