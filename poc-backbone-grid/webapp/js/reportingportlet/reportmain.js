report_json = null;
reportlist_json = null;

$(function() {
	var chart1;
	var chart2;

	ajaxGetCall = function(servletUrl) {
		// alert("Calling Service "+servletUrl);
		$.ajax({
			type : 'GET',
			url : servletUrl,
			success : function(data, textStatus, XMLHttpRequest) {
				var status = data.status;
				if (status == 'OK') {
					populateReportList(data["payload"]["reportList"]);
					onloadHandler();
				} else {
					alert("Server - " + data.errors[0].description);
				}
			},
			error : function(XMLHttpRequest, textStatus, errorThrown) {
				alert("Technical problems.Contact techies!!!");
			}
		});// ends the ajax call

	};

	ajaxGetSummaryCall = function(servletUrl) {
		// alert("Calling Service "+servletUrl);
		$.ajax({
			type : 'GET',
			url : servletUrl,
			success : function(data, textStatus, XMLHttpRequest) {
				var status = data.status;
				if (status == 'OK') {
					displayAxisReport(data["payload"]);
				} else {
					alert("Server - " + data.errors[0].description);
				}
			},
			error : function(XMLHttpRequest, textStatus, errorThrown) {
				alert("Technical problems.Contact techies!!!");
			}
		});// ends the ajax call

	};

	getReportList = function() {
		servletUrl = ajaxResourceUrl + "&SERVICE_KEY=reporting_getReportList";
		ajaxGetCall(servletUrl);
	};

	populateReportList = function(reportlist_json) {
		$('#reportlist').find('option').remove().end();
		var html = '';
		for ( var key in reportlist_json) {
			if (reportlist_json.hasOwnProperty(key)) {
				html += '<option value="' + key + '">' + reportlist_json[key]
						+ '</option>';
			}
		}
		$('#reportlist').append(html);
	};

	getSummaryReport = function() {
		servletUrl = ajaxResourceUrl
				+ "&SERVICE_KEY=reporting_getSummaryReport";
		ajaxGetSummaryCall(servletUrl);
	};

	populateYAxisColumns = function(YColumns) {
		$('#add_column').find('option').remove().end();
		var html = '';
		var len = YColumns.length;
		for ( var i = 0; i < len; i++) {
			html += '<option value="' + (i + 1) + '">'
					+ YColumns[i]["columnName"] + '</option>';
		}
		$('#add_column').append(html);
		$("#chartedit").css("display", "block");
	};

	displayAxisReport = function(report_json) {

		$('#addseries').bind('click');
		$('#removeseries').bind('click');

		if (report_json != null) {
			var axis_choice_mapping = [];

			populateYAxisColumns(report_json["yColumns"]);

			var title = report_json["title"];
			var params = JSON.stringify(report_json["parameters"]);

			var xname = report_json["xColumn"];
			var xvals = report_json["xVals"];

			$('#removeseries')
					.click(
							function() {

								var choice_id = Number($("select#remove_column")
										.val());
								if (choice_id > 0) {
									var choice_name = report_json["yColumns"][choice_id - 1]["columnName"];
									var html = '<option value="' + choice_id
											+ '">' + choice_name + '</option>';
									$('#add_column').append(html);
									$(
											'#remove_column option[value="'
													+ choice_id + '"]')
											.remove();

									var left_choices_size = $('select#remove_column option').length;

									chart1.series[axis_choice_mapping[choice_id]]
											.remove(true);
									chart1.yAxis[axis_choice_mapping[choice_id]]
											.remove();

									chart2.series[axis_choice_mapping[choice_id]]
											.remove(true);
									chart2.yAxis[axis_choice_mapping[choice_id]]
											.remove();

									for ( var i = 0; i < axis_choice_mapping.length; i++) {
										if (axis_choice_mapping[i] > axis_choice_mapping[choice_id]) {
											axis_choice_mapping[i]--;
										}
									}

									if (left_choices_size == 0) {
										chart1.xAxis[0].remove();
										chart2.xAxis[0].remove();
										$('#chartone').html("");
										$('#charttwo').html("");
									}
								}
								refreshTable(report_json);
							}); // ends remove series button
			// function

			$('#addseries')
					.click(
							function() {

								var choice_id = Number($("select#add_column")
										.val());
								if (choice_id > 0) {
									var choice_name = report_json["yColumns"][choice_id - 1]["columnName"];
									var choice_data = report_json["yColumns"][choice_id - 1]["columnVals"];

									for ( var i = 0; i < choice_data.length; i++) {
										if (isNaN(Number(choice_data[i])))
											choice_data[i] = 0.0;
										else
											choice_data[i] = Number(choice_data[i]);
									}
									;

									var html = '<option value="' + choice_id
											+ '">' + choice_name + '</option>';
									$('#remove_column').append(html);
									$(
											'#add_column option[value="'
													+ choice_id + '"]')
											.remove();
									var choices_size = $('select#remove_column option').length;

									axis_choice_mapping[choice_id] = choices_size - 1;

									if (choices_size == 1) {
										chart1 = new Highcharts.Chart({
											chart : {
												renderTo : 'chartone',
												zoomType : 'xy',
												borderColor : '#EBBA95',
												borderWidth : 2
											},
											title : {
												text : title
											},
											subtitle : {
												text : "We'll Show Params Here"
											},
											legend : {
												layout : 'vertical',
												align : 'left',
												verticalAlign : 'top',
												floating : true,
												backgroundColor : '#FFFFFF'
											},
											xAxis : [ {
												categories : xvals
											} ],
											yAxis : [ {
												gridLineWidth : 0,
												title : {
													text : choice_name,
												},
												labels : {
													formatter : function() {
														return this.value;
													}
												},
												opposite : true
											} ],
											series : [ {
												name : choice_name,
												type : "column",
												data : choice_data,
												yAxis : choices_size - 1,
												marker : {
													enabled : true
												}
											} ]

										}); // ends chart1 initialization

										chart2 = new Highcharts.Chart({
											chart : {
												renderTo : 'charttwo',
												zoomType : 'xy',
												borderColor : '#EBBA95',
												borderWidth : 2
											},
											title : {
												text : title
											},
											subtitle : {
												text : "We'll Show Params Here"
											},
											legend : {
												layout : 'vertical',
												align : 'left',
												verticalAlign : 'top',
												floating : true,
												backgroundColor : '#FFFFFF'
											},
											xAxis : [ {
												categories : xvals
											} ],
											yAxis : [ {
												gridLineWidth : 0,
												title : {
													text : choice_name,
												},
												labels : {
													formatter : function() {
														return this.value;
													}
												},
												opposite : true
											} ],
											series : [ {
												name : choice_name,
												type : "line",
												data : choice_data,
												yAxis : choices_size - 1,
												marker : {
													enabled : true
												}
											} ]

										}); // ends chart2 initialization
									} else {
										chart1.addAxis({
											gridLineWidth : 0,
											title : {
												text : choice_name,
											},
											labels : {
												formatter : function() {
													return this.value;
												}
											},
											opposite : true
										});

										chart1.addSeries({
											name : choice_name,
											type : "column",
											data : choice_data,
											yAxis : choices_size - 1,
											marker : {
												enabled : true
											}
										});

										chart2.addAxis({
											gridLineWidth : 0,
											title : {
												text : choice_name,
											},
											labels : {
												formatter : function() {
													return this.value;
												}
											},
											opposite : true
										});

										chart2.addSeries({
											name : choice_name,
											type : "line",
											data : choice_data,
											yAxis : choices_size - 1,
											marker : {
												enabled : true
											}
										});
									}

								}
								refreshTable(report_json);
							}); // ends add series button
			// function

		}

	};

	refreshTable = function(report_json) {
		$('#table')
				.html(
						'<table cellpadding="1" cellspacing="0" border="1" class="display" id="report" title="Gandhis Report"></table>');
		var AACOLUMNS = new Array();
		var AADATA = new Array();
		AACOLUMNS[0] = {
			"sTitle" : report_json.xColumn
		};
		for ( var j = 0; j < report_json.xVals.length; j++) {
			AADATA[j] = new Array();
			AADATA[j][0] = report_json.xVals[j];
		}
		i = 1;
		$("#remove_column option")
				.each(
						function() {
							c = this.value - 1;
							AACOLUMNS[i] = {
								"sTitle" : report_json.yColumns[c].columnName
							};
							for ( var j = 0; j < report_json.yColumns[c].columnVals.length; j++) {
								AADATA[j][i] = report_json.yColumns[c].columnVals[j];
							}
							i++;
						});

		if (i == 1)
			$('#table').html("");
		;
		$('#report').dataTable({
			"sDom" : '<"title">lfrtip',
			"aaData" : AADATA,
			"aoColumns" : AACOLUMNS
		});
		$("div.title").html(
				'<h1 align="center">' + report_json["title"] + '</h1>');
	};

	$(document).ready(function() {

		$("#chartedit").css("display", "none");
		getReportList();
	});// ends the document.ready function

	function onloadHandler() {
		$('#getrep')
				.click(
						function() {

							$('#chartone').html("");
							$('#charttwo').html("");
							$('#table').html("");
							$('#add_column').find('option').remove().end();
							$('#remove_column').find('option').remove().end();

							$('#addseries').unbind('click');
							$('#removeseries').unbind('click');
							$("#chartedit").css("display", "none");

							var reports_size = $('select#reportlist option').length;

							if (reports_size == 0) {

								alert("Client - Proceed to getReportList first");
							} else {
								var choice_id = $("select#reportlist").val();
								if (choice_id == "summaryreport") {
									getSummaryReport();

								} else {
									alert("Client - Selected "
											+ choice_id
											+ " Service is still not supported.Please choose other Service");

								}

							}

						}); // ends the getrep click function
	}

	(function(Highcharts) {
		/**
		 * Utility function to remove last occurence of an item from an array
		 * 
		 * @param {Array}
		 *            arr
		 * @param {Mixed}
		 *            item
		 */
		function erase(arr, item) {
			var i = arr.length;
			while (i--) {
				if (arr[i] === item) {
					arr.splice(i, 1);
					break;
				}
			}
		}

		/**
		 * Add an axis to the chart
		 * 
		 * @param {Object}
		 *            options The axis option
		 * @param {Boolean}
		 *            isX Whether it is an X axis or a value axis
		 */
		Highcharts.Chart.prototype.addAxis = function(options, isX) {
			var key = isX ? 'xAxis' : 'yAxis', axis = new Highcharts.Axis(this,
					Highcharts.merge(options, {
						index : this[key].length
					}));
			axis.chart = this;
			// Push the new axis options to the chart options
			this.options[key] = Highcharts.splat(this.options[key] || {});
			this.options[key].push(options);
		};

		/**
		 * Remove an axis from the chart
		 */
		Highcharts.Axis.prototype.remove = function() {
			if (this.series.length) {
				console
						.error('Highcharts error: Cannot remove an axis that has connected series');
			} else {
				var key = this.isXAxis ? 'xAxis' : 'yAxis';
				erase(this.chart.axes, this);
				erase(this.chart[key], this);
				this.destroy();
				this.chart.isDirtyBox = true;
				this.chart.redraw();
			}
		};
	}(Highcharts));

});