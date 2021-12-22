define({
	"adFormatId": 10350,
	"name": "ImmersiveTakeover_1.4.0_1x1_Video",
	"defaultBanner": "Main_Banner",
	"defaultPanel": "header",
	"banners": [{
		"name": "Main_Banner",
		"width": 1,
		"height": 1,
		"defaultImage": "images/1x1.jpg"
	}],
	"panels": [{
			"name": "header",
			"asset": "panels/header/index.html",
			"width": 970,
			"height": 250,
			"autoExpand": "never",
			"autoCollapse": "never",
			"delayedExpansion": false,
			"positionType": "bannerRelativePixels",
			"x": 0,
			"y": 0
		},
		{
			"name": "leftGutter",
			"asset": "panels/left_gutter/index.html",
			"width": 0,
			"height": 0,
			"autoExpand": "never",
			"autoCollapse": "never",
			"delayedExpansion": false,
			"positionType": "bannerRelativePixels",
			"x": 0,
			"y": 0
		},
		{
			"name": "rightGutter",
			"asset": "panels/right_gutter/index.html",
			"width": 0,
			"height": 0,
			"autoExpand": "never",
			"autoCollapse": "never",
			"delayedExpansion": false,
			"positionType": "bannerRelativePixels",
			"x": 0,
			"y": 0
		},
		{
			"name": "background",
			"asset": "panels/background/index.html",
			"width": 1024,
			"height": 576,
			"autoExpand": "never",
			"autoCollapse": "never",
			"delayedExpansion": false,
			"positionType": "bannerRelativePixels",
			"x": 0,
			"y": 0
		}
	],
	"clickThrough": {
		"url": "http://www.sizmek.com/?defaultClickthrough",
		"target": "newWindow",
		"showMenuBar": true,
		"showAddressBar": true,
		"closePanels": false
	},
	"customInteractions": [{
			"name": "click_header_expand",
			"reportingName": "click header expand",
			"type": "Clickthrough",
			"includeInRate": true,
			"closePanels": false,
			"landingPageUrl": "http://www.sizmek.com/?click_header_expand",
			"target": "newWindow",
			"showMenuBar": true,
			"showAddressBar": true
		},
		{
			"name": "click_header_collapse",
			"reportingName": "click header collapse",
			"type": "Clickthrough",
			"includeInRate": true,
			"closePanels": false,
			"landingPageUrl": "http://www.sizmek.com/?click_header_collapse",
			"target": "newWindow",
			"showMenuBar": true,
			"showAddressBar": true
		},
		{
			"name": "click_left_gutter",
			"reportingName": "click left gutter",
			"type": "Clickthrough",
			"includeInRate": true,
			"closePanels": false,
			"landingPageUrl": "http://www.sizmek.com/?click_left_gutter",
			"target": "newWindow",
			"showMenuBar": true,
			"showAddressBar": true
		},
		{
			"name": "click_right_gutter",
			"reportingName": "click right gutter",
			"type": "Clickthrough",
			"includeInRate": true,
			"closePanels": false,
			"landingPageUrl": "http://www.sizmek.com/?click_right_gutter",
			"target": "newWindow",
			"showMenuBar": true,
			"showAddressBar": true
		},
		{
			"name": "click_background",
			"reportingName": "click background",
			"type": "Clickthrough",
			"includeInRate": true,
			"closePanels": false,
			"landingPageUrl": "http://www.sizmek.com/?click_background",
			"target": "newWindow",
			"showMenuBar": true,
			"showAddressBar": true
		},
		{
			"name": "clickable_gutters",
			"reportingName": "clickable gutters",
			"type": "Clickthrough",
			"includeInRate": true,
			"closePanels": false,
			"landingPageUrl": "http://www.sizmek.com/?clickable_gutters",
			"target": "newWindow",
			"showMenuBar": true,
			"showAddressBar": true
		}
		
	],
	"variables": [
		{
			"key": "mdBackupImgPath",
			"value": "images/970x250_Default.jpg"
		},
		{
			"key": "mdPageBackground",
			"value": "enabled:false, img:images/background_default.jpg, color:#000000, size:cover, position:top center, repeat:no-repeat, attach:fixed, fade:fade-in, fade_time:3000, inject:body, injectType:div, clickable:false"
		},
		{
			"key": "mdAutoExpandDelay",
			"value": "0"
		},
		{
			"key": "mdAutoCollapseTimeout",
			"value": "10"
		},
		{
			"key": "mdExpandToFullScreen",
			"value": "false"
		},
		{
			"key": "mdExpandCollapseAnimEasing",
			"value": "easeInOutQuint"
		},
		{
			"key": "mdCollapseAnimDuration",
			"value": "1000"
		},
		{
			"key": "mdExpandAnimDuration",
			"value": "1000"
		},
		{
			"key": "mdPushdownAnimate",
			"value": "true"
		},
		{
			"key": "mdAlignTopScroll",
			"value": "false"
		},
		{
			"key": "mdShowGutters",
			"value": "true"
		},
		{
			"key": "mdHeaderOffset",
			"value": "0"
		},
		{
			"key": "mdHeaderPlacementSelector",
			"value": "undefined"
		},
		{
			"key": "mdHeaderPanelName",
			"value": "header"
		},
		{
			"key": "mdHeaderInjectType",
			"value": "After"
		},
		{
			"key": "mdMinHeaderWidth",
			"value": "970"
		},
		{
			"key": "mdHeaderExpandedHeight",
			"value": "408"
		},
		{
			"key": "mdHeaderSizeInheritence",
			"value": "0-781:450,782-1023:250,1024-4000:250"
		},
		{
			"key": "mdHeaderExpandPercentage",
			"value": "100"
		},
		{
			"key": "mdHeaderPanelBottomOffset",
			"value": "0"
		},
		{
			"key": "mdHeaderPanelTopOffset",
			"value": "0"
		},
		{
			"key": "mdBackgroundZIndex",
			"value": "-1"
		},
		{
			"key": "mdExpandFullScreenBelow",
			"value": "3000"
		},
		{
			"key": "mdBackgroundPanelName",
			"value": "background"
		},
		{
			"key": "mdBackgroundPlacementSelector",
			"value": "body"
		},
		{
			"key": "mdBackgroundInjectType",
			"value": "Last"
		},
		{
			"key": "mdGuttersDefaultHeight",
			"value": "1000"
		},
		{
			"key": "mdLeftGutterName",
			"value": "leftGutter"
		},
		{
			"key": "mdLeftGutterMaxWidth",
			"value": "5000"
		},
		{
			"key": "mdLeftGutterMinWidth",
			"value": "100"
		},
		{
			"key": "mdRightGutterName",
			"value": "rightGutter"
		},
		{
			"key": "mdRightGutterMaxWidth",
			"value": "5000"
		},
		{
			"key": "mdRightGutterMinWidth",
			"value": "100"
		},
		{
			"key": "mdGutterTopPos",
			"value": "0"
		},
		{
			"key": "mdPosition",
			"value": "fixed"
		},
		{
			"key": "mdContentOffset",
			"value": "0"
		},
		{
			"key": "mdContentPlacementSelector",
			"value": "undefined"
		},
		{
			"key": "mdContentAlignment",
			"value": "C"
		},
		{
			"key": "mdContentXPosOffset",
			"value": "0"
		},
		{
			"key": "mdContentWidth",
			"value": "970"
		},
		{
			"key": "mdControlPanelName",
			"value": "controls"
		},
		{
			"key": "mdEyeDivZIndex",
			"value": "undefined"
		},
		{
			"key": "mdProgSettingsFolderPath",
			"value": "//services.serving-sys.com/programmatic/DomainList/"
		},
		{
			"key": "mdIsDomainConfigEnabled",
			"value": "false"
		},
		{
			"key": "mdAutoRepositionInterval",
			"value": "100"
		},
		{
			"key": "mdParentLevelsToResize",
			"value": "0"
		},
		{
			"key": "mdAutoScrollTopOnOrientation",
			"value": "true"
		}
	]
});