var sqMissionSolver = {};
$(function() {
	sqMissionSolver = {
		/*
		 * VARS
		 */
		stats : {
			'marauder' : [[60, 12, 24], [61, 12, 25], [63, 12, 25], [64, 12, 26], [65, 13, 26], [66, 13, 27], [66, 14, 28], [68, 14, 28], [70, 14, 28], [72, 14, 28], [73, 15, 28], [74, 15, 29], [74, 16, 30], [75, 16, 31], [77, 16, 31], [78, 16, 32], [79, 17, 32], [80, 17, 33], [80, 18, 34], [82, 18, 34], [84, 18, 34], [86, 18, 34], [87, 19, 34], [88, 19, 35], [88, 20, 36], [89, 20, 37], [91, 20, 37], [92, 20, 38], [93, 21, 38], [94, 21, 39], [94, 22, 40], [96, 22, 40], [98, 22, 40], [100, 22, 40], [101, 23, 40], [102, 23, 41], [102, 24, 42], [103, 24, 43], [105, 24, 43], [106, 24, 44], [107, 25, 44], [108, 25, 45], [108, 26, 46], [110, 26, 46], [112, 26, 46], [114, 26, 46], [115, 27, 46], [116, 27, 47], [116, 28, 48], [117, 28, 49], [119, 28, 49], [120, 28, 50], [121, 29, 50], [122, 29, 51], [122, 30, 52], [124, 30, 52], [126, 30, 52], [128, 30, 52], [129, 31, 52], [130, 31, 53]],
			'gladiator' : [[48, 12, 36], [50, 12, 36], [52, 12, 36], [54, 12, 36], [55, 13, 36], [56, 13, 37], [56, 14, 38], [57, 14, 39], [59, 14, 39], [60, 14, 40], [61, 15, 40], [62, 15, 41], [62, 16, 42], [64, 16, 42], [66, 16, 42], [68, 16, 42], [69, 17, 42], [70, 17, 43], [70, 18, 44], [71, 18, 45], [73, 18, 45], [74, 18, 46], [75, 19, 46], [76, 19, 47], [76, 20, 48], [78, 20, 48], [80, 20, 48], [82, 20, 48], [83, 21, 48], [84, 21, 49], [84, 22, 50], [85, 22, 51], [87, 22, 51], [88, 22, 52], [89, 23, 52], [90, 23, 53], [90, 24, 54], [92, 24, 54], [94, 24, 54], [96, 24, 54], [97, 25, 54], [98, 25, 55], [98, 26, 56], [99, 26, 57], [101, 26, 57], [102, 26, 58], [103, 27, 58], [104, 27, 59], [104, 28, 60], [106, 28, 60], [108, 28, 60], [110, 28, 60], [111, 29, 60], [112, 29, 61], [112, 30, 62], [113, 30, 63], [115, 30, 63], [116, 30, 64], [117, 31, 64], [118, 31, 65]],
			'archer' : [[12, 12, 72], [13, 12, 73], [13, 12, 75], [14, 12, 76], [14, 13, 77], [15, 13, 78], [16, 14, 78], [17, 14, 79], [17, 14, 81], [18, 14, 82], [18, 15, 83], [19, 15, 84], [20, 16, 84], [21, 16, 85], [21, 16, 87], [22, 16, 88], [22, 17, 89], [23, 17, 90], [24, 18, 90], [25, 18, 91], [25, 18, 93], [26, 18, 94], [26, 19, 95], [27, 19, 96], [28, 20, 96], [29, 20, 97], [29, 20, 99], [30, 20, 100], [30, 21, 101], [31, 21, 102], [32, 22, 102], [33, 22, 103], [33, 22, 105], [34, 22, 106], [34, 23, 107], [35, 23, 108], [36, 24, 108], [37, 24, 109], [37, 24, 111], [38, 24, 112], [38, 25, 113], [39, 25, 114], [40, 26, 114], [41, 26, 115], [41, 26, 117], [42, 26, 118], [42, 27, 119], [43, 27, 120], [44, 28, 120], [45, 28, 121], [45, 28, 123], [46, 28, 124], [46, 29, 125], [47, 29, 126], [48, 30, 126], [49, 30, 127], [49, 30, 129], [50, 30, 130], [50, 31, 131], [51, 31, 132]],
			'rogue' : [[24, 12, 60], [24, 12, 62], [24, 12, 64], [24, 12, 66], [24, 13, 67], [25, 13, 68], [26, 14, 68], [27, 14, 69], [27, 14, 71], [28, 14, 72], [28, 15, 73], [29, 15, 74], [30, 16, 74], [30, 16, 76], [30, 16, 78], [30, 16, 80], [30, 17, 81], [31, 17, 82], [32, 18, 82], [33, 18, 83], [33, 18, 85], [34, 18, 86], [34, 19, 87], [35, 19, 88], [36, 20, 88], [36, 20, 90], [36, 20, 92], [36, 20, 94], [36, 21, 95], [37, 21, 96], [38, 22, 96], [39, 22, 97], [39, 22, 99], [40, 22, 100], [40, 23, 101], [41, 23, 102], [42, 24, 102], [42, 24, 104], [42, 24, 106], [42, 24, 108], [42, 25, 109], [43, 25, 110], [44, 26, 110], [45, 26, 111], [45, 26, 113], [46, 26, 114], [46, 27, 115], [47, 27, 116], [48, 28, 116], [48, 28, 118], [48, 28, 120], [48, 28, 122], [48, 29, 123], [49, 29, 124], [50, 30, 124], [51, 30, 125], [51, 30, 127], [52, 30, 128], [52, 31, 129], [53, 31, 130]],
			'lancer' : [[36, 12, 48], [37, 12, 49], [37, 12, 51], [38, 12, 52], [38, 13, 53], [39, 13, 54], [40, 14, 54], [40, 14, 56], [40, 14, 58], [40, 14, 60], [40, 15, 61], [41, 15, 62], [42, 16, 62], [43, 16, 63], [43, 16, 65], [44, 16, 66], [44, 17, 67], [45, 17, 68], [46, 18, 68], [46, 18, 70], [46, 18, 72], [46, 18, 74], [46, 19, 75], [47, 19, 76], [48, 20, 76], [49, 20, 77], [49, 20, 79], [50, 20, 80], [50, 21, 81], [51, 21, 82], [52, 22, 82], [52, 22, 84], [52, 22, 86], [52, 22, 88], [52, 23, 89], [53, 23, 90], [54, 24, 90], [55, 24, 91], [55, 24, 93], [56, 24, 94], [56, 25, 95], [57, 25, 96], [58, 26, 96], [58, 26, 98], [58, 26, 100], [58, 26, 102], [58, 27, 103], [59, 27, 104], [60, 28, 104], [61, 28, 105], [61, 28, 107], [62, 28, 108], [62, 29, 109], [63, 29, 110], [64, 30, 110], [64, 30, 112], [64, 30, 114], [64, 30, 116], [64, 31, 117], [65, 31, 118]],
			'pugilist' : [[36, 24, 36], [37, 24, 37], [37, 24, 39], [38, 24, 40], [38, 25, 41], [39, 25, 42], [40, 26, 42], [41, 26, 43], [41, 26, 45], [42, 26, 46], [42, 27, 47], [43, 27, 48], [44, 28, 48], [45, 28, 49], [45, 28, 51], [46, 28, 52], [46, 29, 53], [47, 29, 54], [48, 30, 54], [49, 30, 55], [49, 30, 57], [50, 30, 58], [50, 31, 59], [51, 31, 60], [52, 32, 60], [53, 32, 61], [53, 32, 63], [54, 32, 64], [54, 33, 65], [55, 33, 66], [56, 34, 66], [57, 34, 67], [57, 34, 69], [58, 34, 70], [58, 35, 71], [59, 35, 72], [60, 36, 72], [61, 36, 73], [61, 36, 75], [62, 36, 76], [62, 37, 77], [63, 37, 78], [64, 38, 78], [65, 38, 79], [65, 38, 81], [66, 38, 82], [66, 39, 83], [67, 39, 84], [68, 40, 84], [69, 40, 85], [69, 40, 87], [70, 40, 88], [70, 41, 89], [71, 41, 90], [72, 42, 90], [73, 42, 91], [73, 42, 93], [74, 42, 94], [74, 43, 95], [75, 43, 96]],
			'conjurer' : [[12, 72, 12], [12, 73, 13], [12, 75, 13], [12, 76, 14], [13, 77, 14], [13, 78, 15], [14, 78, 16], [14, 80, 16], [14, 82, 16], [14, 84, 16], [15, 85, 16], [15, 86, 17], [16, 86, 18], [16, 87, 19], [16, 89, 19], [16, 90, 20], [17, 91, 20], [17, 92, 21], [18, 92, 22], [18, 94, 22], [18, 96, 22], [18, 98, 22], [19, 99, 22], [19, 100, 23], [20, 100, 24], [20, 101, 25], [20, 103, 25], [20, 104, 26], [21, 105, 26], [21, 106, 27], [22, 106, 28], [22, 108, 28], [22, 110, 28], [22, 112, 28], [23, 113, 28], [23, 114, 29], [24, 114, 30], [24, 115, 31], [24, 117, 31], [24, 118, 32], [25, 119, 32], [25, 120, 33], [26, 120, 34], [26, 122, 34], [26, 124, 34], [26, 126, 34], [27, 127, 34], [27, 128, 35], [28, 128, 36], [28, 129, 37], [28, 131, 37], [28, 132, 38], [29, 133, 38], [29, 134, 39], [30, 134, 40], [30, 136, 40], [30, 138, 40], [30, 140, 40], [31, 141, 40], [31, 142, 41]],
			'thaumaturge' : [[12, 60, 24], [12, 61, 25], [12, 63, 25], [12, 64, 26], [13, 65, 26], [13, 66, 27], [14, 66, 28], [14, 67, 29], [14, 69, 29], [14, 70, 30], [15, 71, 30], [15, 72, 31], [16, 72, 32], [16, 73, 33], [16, 75, 33], [16, 76, 34], [17, 77, 34], [17, 78, 35], [18, 78, 36], [18, 79, 37], [18, 81, 37], [18, 82, 38], [19, 83, 38], [19, 84, 39], [20, 84, 40], [20, 85, 41], [20, 87, 41], [20, 88, 42], [21, 89, 42], [21, 90, 43], [22, 90, 44], [22, 91, 45], [22, 93, 45], [22, 94, 46], [23, 95, 46], [23, 96, 47], [24, 96, 48], [24, 97, 49], [24, 99, 49], [24, 100, 50], [25, 101, 50], [25, 102, 51], [26, 102, 52], [26, 103, 53], [26, 105, 53], [26, 106, 54], [27, 107, 54], [27, 108, 55], [28, 108, 56], [28, 109, 57], [28, 111, 57], [28, 112, 58], [29, 113, 58], [29, 114, 59], [30, 114, 60], [30, 115, 61], [30, 117, 61], [30, 118, 62], [31, 119, 62], [31, 120, 63]],
			'arcanist' : [[12, 48, 36], [12, 49, 37], [12, 51, 37], [12, 52, 38], [13, 53, 38], [13, 54, 39], [14, 54, 40], [14, 55, 41], [14, 57, 41], [14, 58, 42], [15, 59, 42], [15, 60, 43], [16, 60, 44], [16, 61, 45], [16, 63, 45], [16, 64, 46], [17, 65, 46], [17, 66, 47], [18, 66, 48], [18, 67, 49], [18, 69, 49], [18, 70, 50], [19, 71, 50], [19, 72, 51], [20, 72, 52], [20, 73, 53], [20, 75, 53], [20, 76, 54], [21, 77, 54], [21, 78, 55], [22, 78, 56], [22, 79, 57], [22, 81, 57], [22, 82, 58], [23, 83, 58], [23, 84, 59], [24, 84, 60], [24, 85, 61], [24, 87, 61], [24, 88, 62], [25, 89, 62], [25, 90, 63], [26, 90, 64], [26, 91, 65], [26, 93, 65], [26, 94, 66], [27, 95, 66], [27, 96, 67], [28, 96, 68], [28, 97, 69], [28, 99, 69], [28, 100, 70], [29, 101, 70], [29, 102, 71], [30, 102, 72], [30, 103, 73], [30, 105, 73], [30, 106, 74], [31, 107, 74], [31, 108, 75]]
		},	
		
		exp : [1000, 1100, 1200, 1300, 1400, 1500, 1600, 1700, 1800, 2000, 2200, 2400, 2600, 2800, 3000, 3200, 3400, 3600, 3800, 4100, 4400, 4700, 5000, 5300, 5600, 5900, 6200, 6500, 6800, 7200, 7600, 8000, 8400, 8800, 9200, 9600, 10000, 10400, 11000, 12000, 13000, 14000, 15000, 16000, 18000, 20000, 22000, 24000, 26000, 28000, 46500, 51000, 55500, 60000, 66000, 72000, 78000, 84000, 90000],	
		missionGoals : 			[],
		squadronRank : 			0,
		bonusSquadron : 		[],
		squadron : 				[],
		trainings : 			[[40, -20, -20], [-20, 40, -20], [-20, -20, 40], [20, 20, -40], [20, -40, 20], [-40, 20, 20], [0, 0, 0]],
		expTrainings : 			[2000, 2000, 2000, 2000, 2000, 2000, 3000],
		chemistry : 			'',
		bonusChemistryAlmost :  '',
		missionBonus : 			[],
		activeSquadron : 		1,
		maxTrainings : 			3,
		almostMatching :		[],
		missionLevel : 			0,
		allDifferentClass : 	false,
		allDifferentRace : 		false,
		classes: 				{'marauder' : 0, 'gladiator' : 1, 'archer' : 2, 'rogue' : 3, 'lancer' : 4, 'pugilist' : 5, 'conjurer' : 6, 'thaumaturge' : 7, 'arcanist' : 8},
		nonMandatoryChem : 		['chem_percentage', 'cont_off', 'cont_def', 'cont_mag', 'doh_materia', 'dol_materia', 'dom_materia', 'tank_materia', 'clusters', 'gat_scrips', 'cra_scrips', 'seals', 'mgp', 'gil', 'chem_percentage'],
		
		/*
		 * INIT THE APPLICATION
		 */
		init : function() {	
			if(localStorage.getItem('squadron') !=  null && !Cookies.get('message-esper')) {
				$('#overlay').show();
				$('#close-message').on('click', function() { sqMissionSolver.closeMessage() });
			}
			
			if(localStorage.getItem('squadronNames') == null) {
				var names = {'1': 'Squadrone 1', '2': 'Squadrone 2', '3': 'Squadrone 3', '4': 'Squadrone 4', '5': 'Squadrone 5'}
				localStorage.setItem('squadronNames', JSON.stringify(names));
				sqMissionSolver.updateSquadronNames();
			}
			else {
				sqMissionSolver.updateSquadronNames();
			}
		
			/* Load an init the squadron */
			sqMissionSolver.load();
			sqMissionSolver.squadronRank = parseInt($('#rank').val());
			sqMissionSolver.bonusSquadron = [parseInt($('#b-phy').val()), parseInt($('#b-men').val()), parseInt($('#b-tac').val())];
			sqMissionSolver.missionBonus = [$('#mission-bonus-1').val(), $('#mission-bonus-2').val(), $('#mission-bonus-3').val()];
			sqMissionSolver.maxTrainings = parseInt($('#max-trainings').val()) > 6 ? 6 : parseInt($('#max-trainings').val());
			
			/* Listeners */
			$('#resolve').on('click', function() { sqMissionSolver.resolve(); });
			$('#rank, select.recruit, .race-recruit, .name-recruit, .mission-bonus, .use-recruit').on('change', function() { sqMissionSolver.save(); });
			$('#rank').on('change', function() { sqMissionSolver.squadronRank = parseInt($('#rank').val()); });
			$('input.value').on('keyup', function() { sqMissionSolver.save(); });
			$('select.level-recruit').on('change', function() { sqMissionSolver.setExp(this); sqMissionSolver.checkCurrentExp($('#exp-recruit-' + this.id.slice(-1))); sqMissionSolver.save(); });
			$('.exp-recruit').on('blur', function() { sqMissionSolver.checkCurrentExp(this); sqMissionSolver.save(); });
			$('.training-icon').on('click', function() { sqMissionSolver.setActiveTraining(this); });
			$('#b-apply-exp-reward').on('click', function() { sqMissionSolver.addExp(); });
			$('select.recruit, select.level-recruit, select.race-recruit, select.name-recruit').on('change', function() { sqMissionSolver.generateSquadron(); sqMissionSolver.updateClassesExp(); });
			$('#mission-exp-reward').on('click', '#select-classes-exp img', function() { sqMissionSolver.setClassesForExp(this); sqMissionSolver.unlockXpButton(); });
			$('#b-apply-training').on('click', function() { sqMissionSolver.activeConfirmTraining(); });
			$('#b-confirm-training').on('click', function() { sqMissionSolver.applyTraining(); });
			$('.image-chemistry').on('click', function() { sqMissionSolver.openChemistry(this); });
			$('#apply-chemistry').on('click', function() { sqMissionSolver.applyChemistry(); });
			$('#delete-chemistry').on('click', function() { sqMissionSolver.deleteChemistry(); });
			$('.mission-bonus').on('change', function() { sqMissionSolver.updateMissionBonus() });
			$('#b-phy, #b-men, #b-tac').on('blur', function() { sqMissionSolver.bonusSquadron = [parseInt($('#b-phy').val()), parseInt($('#b-men').val()), parseInt($('#b-tac').val())]; });
			$('#squadrons-list a').on('click', function() { sqMissionSolver.setActiveSquadron($(this), true); });
			$('#rename').on('click', function() { sqMissionSolver.openRenameSquadrons(); });
			$('#clear-results').on('click', function() { $('#possible, #processed').html(''); $('#how-to-use').show(); });
			$('#export').on('click', function() { sqMissionSolver.openExportSquadron(); });
			$('#import').on('click', function() { sqMissionSolver.openImportSquadron(); });
			$('#import-squadron').on('click', function() { sqMissionSolver.importSquadron(); });
			$('#clear').on('click', function() { sqMissionSolver.openClearSquadron(); });
			$('#squadron .lines-recruits').sortable({handle: '.recruit-number', update : function(event, ui) { sqMissionSolver.updateOrder(event, ui); }});
			$('#max-trainings').on('blur', function() { if(parseInt($(this).val()) > 6) $(this).val(6); sqMissionSolver.maxTrainings = parseInt($(this).val()); });
			$('#command-exp-reward').on('keydown', function() { $('#trainee-exp-reward').val(''); });
			$('#trainee-exp-reward').on('keydown', function() { $('#command-exp-reward').val(''); });
			$('#apply-rename').on('click', function() { sqMissionSolver.applyRenameSquadron(); });
			$('#command-exp-reward, #trainee-exp-reward').on('keydown', function() { setTimeout(function() { sqMissionSolver.unlockXpButton(); }, 1) });
		},
		
		/*
		 * CHECK IF IT'S OK TO UNLOCK THE APPLY BUTTON TO GIVE XP TO RECRUITS
		 */
		unlockXpButton : function() {
			var activeRecruits = $('#select-classes-exp > img.active').length;

			if((activeRecruits == 3 && parseInt($('#command-exp-reward').val()) > 0) || activeRecruits == 4 && parseInt($('#trainee-exp-reward').val()) > 0) {
				$('#b-apply-exp-reward').attr('disabled', false);
			}
			else {
				$('#b-apply-exp-reward').attr('disabled', true);
			}
		},
		
		/*
		 * CLOSE THE SUPPORT MESSAGE FOR ESPER
		 */
		closeMessage: function() {
			$('#overlay').hide();
			Cookies.set('message-esper', 1, { expires : 10000 });
		},
		
		/*
		 * UPDATES THE NAME OF THE SQUADRONS IN THE MENU
		 */
		updateSquadronNames: function() {
			var names = JSON.parse(localStorage.getItem('squadronNames'));
				
			for(var i = 1; i <= 5; i++) {
				$('#squadron-' + i).html(names[i]);
			}
		},
				
		/*
		 * RESET THE PREVIOUSLY CALCULATED RESULTS
		 */
		reset : function() {
			$('#possible').html('');
			
			sqMissionSolver.squadronRank = parseInt($('#rank').val());
			sqMissionSolver.bonusSquadron = [parseInt($('#b-phy').val()), parseInt($('#b-men').val()), parseInt($('#b-tac').val())];
			sqMissionSolver.missionBonus = [$('#mission-bonus-1').val(), $('#mission-bonus-2').val(), $('#mission-bonus-3').val()];
			sqMissionSolver.missionGoals = [parseInt($('#phy').val()), parseInt($('#men').val()), parseInt($('#tac').val())];
			sqMissionSolver.maxTrainings = parseInt($('#max-trainings').val()) > 6 ? 6 : parseInt($('#max-trainings').val());
			sqMissionSolver.squadron = [];
			sqMissionSolver.almostMatching = [];
			sqMissionSolver.missionLevel =  parseInt($('#m-level').val())

			sqMissionSolver.generateSquadron();
		},
		
		/*
		 * LOAD THE SQUADRON OBJECT
		 */
		load : function() {
			var squadron = sqMissionSolver.getSquadron();
			
			if(squadron === null) {
				var squadron = { 'activeSquadron' : '1', '1' : {}, '2' : {}, '3' : {}, '4' : {}, '5' : {} };
				localStorage.setItem('squadron', JSON.stringify(squadron));
			}
			else {
				sqMissionSolver.activeSquadron = squadron.activeSquadron;
				sqMissionSolver.setActiveSquadron($('#squadron-' + sqMissionSolver.activeSquadron));
				
				if(Object.keys(squadron[sqMissionSolver.activeSquadron]).length == 0) {
					sqMissionSolver.clearForms();
				}
				
				$('.image-chemistry').removeClass('active');
				$.each(squadron[sqMissionSolver.activeSquadron], function(index, value) {
					if($('#' + index).prop('type') !== 'undefined' && $('#' + index).prop('type') === 'checkbox') {
						$('#' + index).removeProp('checked');
						if(value == true || value == 'true') {
							$('#' + index).prop('checked', value);
						}
					}
					else {
						$('#' + index).val(value);
					}
					
					/* Color of the chemistry icon */
					if(index.match(/^chemistry-recruit-[0-9]/) !== null && value != '') {
						$('#' + index).prev().addClass('active');
					}
				});
			}
			
			sqMissionSolver.generateSquadron();
			sqMissionSolver.updateClassesExp();
		},
		
		/*
		 * SAVE, WHEN A VALUE IS CHANGED IN A FORM
		 */
		save : function() {
			var values = $('select.recruit, select.level-recruit, input.value, #rank, .race-recruit, .exp-recruit, .chemistry, .use-recruit, .mission-bonus, #m-level, #max-trainings, .name-recruit');
			var squadron = sqMissionSolver.getSquadron();
			squadron[sqMissionSolver.activeSquadron] = {};
			
			values.each(function() {
				if($(this).prop('type') !== 'undefined' && $(this).prop('type') === 'checkbox') {
					squadron[sqMissionSolver.activeSquadron][this.id] = $(this).prop('checked');
				}
				else {
					squadron[sqMissionSolver.activeSquadron][this.id] = this.value;
				}
			});
			
			localStorage.setItem('squadron', JSON.stringify(squadron));
			sqMissionSolver.generateSquadron();
		},
		
		/*
		 * UPDATE THE ORDER OF THE LIST OF RECRUITS
		 */
		updateOrder : function(event, ui) {
			$('.sortable').each(function(index) { 
				$(this).children().each(function() {
					if(this.id !== '') {
						this.id = this.id.slice(0, -1) + (index + 1);
					}
					if(this.className == 'recruit-number') {
						$(this).html(index + 1 + '.')
					}
				});
			});
			
			sqMissionSolver.save();
			sqMissionSolver.generateSquadron();
			sqMissionSolver.updateClassesExp();
		},
		
		/*
		 * RETURN THE SQUADRON OBJECT, PARSED
		 */
		getSquadron : function() {
			return JSON.parse(localStorage.getItem('squadron'));
		},
				
		/*
		 * CAPITALIZE A WORD
		 */
		capitalize : function(word) {
			if(word == '' || typeof word == 'undefined') { return word; }
			return word[0].toUpperCase() + word.slice(1);
		},
		
		/*
		 * CLEAR ALL THE FORMS
		 */
		clearForms : function() {
			$('#select-classes-exp').html('');
			$('select.recruit, select.level-recruit, .race-recruit, .name-recruit, .chemistry, .mission-bonus').val('');
			$('.exp-recruit, #m-level, input.value').val('0');
			$('#rank').val('200');
			$('#max-trainings').val('3');
			$('.image-chemistry').removeClass('active');
		},
		
		/* 
		 * SAVE THE CURRENT SQUADRON BASED ON THE OBJECT (NOT THE VALUES IN THE FORMS)
		 */
		saveFromObject : function() {
			var keys = $('select.recruit, select.level-recruit, input.value, #rank, .race-recruit, .exp-recruit, .chemistry, .use-recruit, .mission-bonus, #m-level, #max-trainings, .name-recruit');
			var squadron = sqMissionSolver.getSquadron();
			squadron[sqMissionSolver.activeSquadron] = {};

			keys.each(function() {
				var nb = this.id.split('-');
				nb = Number(nb[nb.length - 1]);
				nb--;

				if(this.id.match(/^recruit-[0-9]/) !== null) {
					squadron[sqMissionSolver.activeSquadron][this.id] = typeof sqMissionSolver.squadron[nb][2] !== 'undefined' ? sqMissionSolver.squadron[nb][2].toString() : '';
				}
				else if(this.id.match(/^level-recruit-[0-9]/) !== null) {
					squadron[sqMissionSolver.activeSquadron][this.id] = typeof sqMissionSolver.squadron[nb][3] !== 'undefined' ? sqMissionSolver.squadron[nb][3].toString() : '';
				}
				else if(this.id.match(/^race-recruit-[0-9]/) !== null) {
					squadron[sqMissionSolver.activeSquadron][this.id] = typeof sqMissionSolver.squadron[nb][4] !== 'undefined' ? sqMissionSolver.squadron[nb][4].toString() : '';
				}
				else if(this.id.match(/^name-recruit-[0-9]/) !== null) {
					squadron[sqMissionSolver.activeSquadron][this.id] = typeof sqMissionSolver.squadron[nb][8] !== 'undefined' ? sqMissionSolver.squadron[nb][8].toString() : '';
				}
				else if(this.id.match(/^exp-recruit-[0-9]/) !== null) {
					squadron[sqMissionSolver.activeSquadron][this.id] = typeof sqMissionSolver.squadron[nb][5] !== 'undefined' ? sqMissionSolver.squadron[nb][5].toString() : '';
				}
				else if(this.id.match(/^chemistry-recruit-[0-9]/) !== null) {
					squadron[sqMissionSolver.activeSquadron][this.id] = typeof sqMissionSolver.squadron[nb][6] !== 'undefined' && (sqMissionSolver.squadron[nb][6].length == 4 || sqMissionSolver.squadron[nb][6].length == 5) ? sqMissionSolver.squadron[nb][6].join('|') : ''; 
				}
				else if(this.id.match(/^use-recruit-[0-9]/) !== null) {
					squadron[sqMissionSolver.activeSquadron][this.id] = typeof sqMissionSolver.squadron[nb][7] !== 'undefined' ? sqMissionSolver.squadron[nb][7].toString() : '';
				}
				else {
					squadron[sqMissionSolver.activeSquadron][this.id] = $('#' + this.id).val();
				}
			});

			localStorage.setItem('squadron', JSON.stringify(squadron));
		},
		
		/*
		 * SET THE ACTIVE SQUADRON AND LOAD IT
		 */
		setActiveSquadron : function(squadron, set) {
			$('#squadrons-list a').removeClass('active');
			squadron.addClass('active');
			sqMissionSolver.activeSquadron = squadron.prop('id').slice(-1);
			 $('#possible, #processed').html(''); 
			 $('#how-to-use').show();
			
			if(set == true) {
				var squadron = sqMissionSolver.getSquadron();
				squadron.activeSquadron = sqMissionSolver.activeSquadron;
				localStorage.setItem('squadron', JSON.stringify(squadron));
				sqMissionSolver.load();
			}
		},
		
		/*
		 * SET THE ACTIVE TRAINING
		 */
		setActiveTraining : function(training) {			
			var active = $(training).hasClass('active');
			$('.training-icon').removeClass('active');
			$('#b-apply-training').attr('disabled', true);
			if(active !== true) {
				$('#b-apply-training').attr('disabled', false);
				$(training).addClass('active');
			}
			
			sqMissionSolver.deactiveConfirmTraining();
		},
		
		/*
		 * SET THE LIST OF THE CLASSES FOR THE EXP TRAINING
		 */
		updateClassesExp : function() {
			$('#select-classes-exp').html('');
			$('select.recruit').each(function(index, value) {
				if(sqMissionSolver.squadron[index] && $(value).val() !== '' && sqMissionSolver.squadron[index][9] == true) {
					var nb = index + 1;
					var cl = sqMissionSolver.capitalize(sqMissionSolver.squadron[index][2]);
					var level = sqMissionSolver.squadron[index][3];
					var race = sqMissionSolver.squadron[index][4] !== '' ? sqMissionSolver.capitalize(sqMissionSolver.squadron[index][4]) : 'Unknown race';
					var name = sqMissionSolver.squadron[index][8] !== '' ? sqMissionSolver.capitalize(sqMissionSolver.squadron[index][8]) : 'Unknown name';
					
					$('<img src="img/' + $(this).val() + '.png" id="training-recruit-' + index + '" title="' + nb + '. ' + cl + ' - ' + level + ' - ' + race + ' - ' + name + '" />').appendTo('#select-classes-exp');
				}
				if($(value).val() == '') {
					$('#training-recruit-' + index).remove();
				}
			});
		},
		
		/*
		 *UPDATE THE MISSION BONUS FOR THE MISSION
		 */
		updateMissionBonus : function() {
			sqMissionSolver.missionBonus = [$('#mission-bonus-1').val(), $('#mission-bonus-2').val(), $('#mission-bonus-3').val()];
		},
		
		/*
		 * SELECT THE CLASSES FOR THE MISSION EXP REWARD 
		 */
		setClassesForExp : function(cl) {
			$(cl).toggleClass('active');
			var active = $('#select-classes-exp img.active').length;
			
			if(active == 5) {
				$('#select-classes-exp img.active').not(cl).first().toggleClass('active');
			}
		},
		
		/*
		 * GENERATE SQUADRON 
		 */
		generateSquadron : function() {
			sqMissionSolver.squadron = [];
			var recruits = $('select.recruit');
			
			var races = {};
			var classes = {};

			recruits.each(function() {
				var id = this.id;
				var type = $(this).val();
				var level = parseInt($('#level-' + id).val());
				var race = $('#race-' + id).val();
				var name = $('#name-' + id).val();
				var exp = parseInt($('#exp-' + id).val()) || 0;
				var chemistry = $('#chemistry-' + id).val();
				var use = $('#use-' + id).prop('checked');
				
				if(typeof classes[type] == 'undefined') {
					classes[type] = 1;
				}
				else {
					classes[type] += 1;
				}
				if(typeof races[race] == 'undefined') {
					races[race] = 1;
				}
				else {
					races[race] += 1;
				}
				
				/* Reset fields colors */
				$(this).parent().find('select, input[type="text"]').removeClass('missing-data');
				$(this).parent().find('select, input').removeClass('excluded');
				
				//if(type !== '' && race !== '') {
					if(isNaN(level)) {
						$('#level-' + id).val('1');
						level = 1;
					}
				
					var currentStats = [];
					currentStats.push(sqMissionSolver.squadron.length);
					currentStats.push(type !== '' ? sqMissionSolver.stats[type][level - 1].slice() : 0);
					currentStats.push(type);
					currentStats.push(level);
					currentStats.push(race);
					currentStats.push(exp);
					if(chemistry != '')
						currentStats.push(chemistry.split('|')); 
					else
						currentStats.push(chemistry);
					currentStats.push(use);
					currentStats.push(name);
					currentStats.push(type == '' || race == '' ? false : true);
					currentStats.push(!!(currentStats[7] * currentStats[9]));
					sqMissionSolver.squadron.push(currentStats);
					
					if(currentStats[9] == false) {
						$(this).parent().find('select, input').addClass('missing-data');
						$('#exp-' + id).val('');
					}
					else if(!use) {
						$(this).parent().find('select, input').addClass('excluded');
					}
					
					if(level == 60) {
						$('#exp-' + id).val('');
					}
				//}
				/*else {
					$('#level-' + id).val('');
					sqMissionSolver.squadron.push([]);
				}*/
			});

			sqMissionSolver.setExp();
		},
		
		checkCurrentExp : function(item) {
			var currentExp = $(item).val();
			if(currentExp == '' || isNaN(parseInt(currentExp))) {
				currentExp = 0;
				 $(item).val('0');
			}
			var maxExp = Number($(item).next().html());
			if(maxExp == 0) {
				$(item).val('');
			}
			else if(currentExp >= maxExp) {
				$(item).val(maxExp - 1);
			}
		},
		
		/* 
		 * DISPLAY THE MAX XP VALUE FOR A CLASS, AND SWITCH BACK THE LEVEL TO A VALUE OR NOTHING IF NEEDED
		 */
		setExp : function(item) {
			if(item) {
				var id = $(item).prev().prop('id');
				if($(item).val() == '' && $('#' + id).val() !== '') {
					$(item).val('1');
				}
				else if($(item).val() > 0 && $('#' + id).val() == '') {
					$(item).val('');
				}
				var value = $(item).val() == 60 ? 'Max' : sqMissionSolver.exp[$(item).val() - 1];
				
				$('#exp-needed-' + id).html('');
				$('#exp-needed-' + id).html(value);
			}
			else {
				$('.level-recruit').each(function() {
					sqMissionSolver.setExp(this);
				});
			}
		},
	
		/*
		 * GENERATE THE 70 UNIQUE COMBINATIONS
		 */
		getCombinations : function(squadron, size) {
			var len = squadron.length;
			if(size > len) { return [] };
			if(!size) { return [[]] };
			if(size == len) { return [squadron] };

			return squadron.reduce(function (acc, val, i) {
				var res = sqMissionSolver.getCombinations(squadron.slice(i + 1), size - 1)
				.map(function(comb) {
					return [val].concat(comb); 
				});
    
				return acc.concat(res);
			}, []);
		},
		
		/*
		 * RETURN THE TOTAL OF A GIVEN STAT FOR THE CURRENT COMBINATION
		 */
		getTotalStats : function(squadron) {		
			/* Chemistry */
			var bonusChemistry = [[0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0]];
			var tabChemistry = [false, false, false, false];
			var bonus = ['phy', 'men', 'tac'];
			var priorityChemistries = 0;

			for(var i = 0; i <= 3; i += 1) {
				if(squadron[i][6].length >= 4) {
					var chemistry = squadron[i][6]; 
					
					if(chemistry[2] != 'exp') {
						var chemistryActivated = sqMissionSolver.isChemistryActivated(squadron, i, true, [squadron[0][4], squadron[1][4], squadron[2][4], squadron[3][4]], [squadron[0][2], squadron[1][2], squadron[2][2], squadron[3][2]], chemistry);

						if(chemistryActivated == true && sqMissionSolver.nonMandatoryChem.indexOf(chemistry[2]) == -1) {
							tabChemistry[i] = true;
							if((squadron[i][2] == sqMissionSolver.missionBonus[0] || squadron[i][2] == sqMissionSolver.missionBonus[1] || squadron[i][2] == sqMissionSolver.missionBonus[2]) || ((squadron[i][4] == sqMissionSolver.missionBonus[0] || squadron[i][4] == sqMissionSolver.missionBonus[1] || squadron[i][4] == sqMissionSolver.missionBonus[2]) && squadron[i][4] !== '')) {
								var multi = 1 + (chemistry[1] * 2 / 100);
							}
							else {
								var multi = 1 + (chemistry[1] / 100);
							}
							
							var toAll = chemistry[3] == 'true' ? true : false;
							var index = bonus.indexOf(chemistry[2]);

							if(toAll == false) {
								bonusChemistry[i][index] += (Math.floor(squadron[i][1][index] * multi) - squadron[i][1][index]);
							}
							else {
								for(var j = 0; j <= 3; j += 1) {
									bonusChemistry[j][index] += (Math.floor(squadron[j][1][index] * multi) - squadron[j][1][index]);
								}
							}
						}
						else if(chemistryActivated == true && sqMissionSolver.nonMandatoryChem.indexOf(chemistry[2]) !== -1) {
							tabChemistry[i] = true;
						}
						
						if(chemistryActivated == true && !isNaN(parseInt(chemistry[4]))) {
							priorityChemistries += Number(chemistry[4]);
						}
					}
				}
			}
			
			var totalPhy = squadron[0][1][0] + squadron[1][1][0] + squadron[2][1][0] + squadron[3][1][0];
			var totalMen = squadron[0][1][1] + squadron[1][1][1] + squadron[2][1][1] + squadron[3][1][1];
			var totalTac = squadron[0][1][2] + squadron[1][1][2] + squadron[2][1][2] + squadron[3][1][2];

			return [totalPhy, totalMen, totalTac, bonusChemistry, tabChemistry, priorityChemistries];	
		},
		
		/*
		 * RETURN WHETHER OR NOT A CHEMISTRY IS ACTIVATED
		 */
		isChemistryActivated : function(stats, i, mission, races, classes, chemistry) {
			switch(chemistry[0]) {
				case 'same_class':
					chemistry[0] = stats[i][2];
				break;
				
				case 'same_race':
					chemistry[0] = stats[i][4];
				break;
				
				case 'no_same_class':
					chemistry[0] = '_' + stats[i][2];
				break;
				
				case 'no_same_race':
					chemistry[0] = '_' + stats[i][4];
				break;
				
				case 'diff_class':
					var count = classes.filter(function(item){ return item === stats[i][2]; }).length;
					if(count == 1) {
						return true;
					}
				break;
				
				case 'diff_race':
					var count = races.filter(function(item){ return item === stats[i][4]; }).length;
					if(count == 1) {
						return true;
					}
				break;
				
				case '3+_class':
					if((classes[0] == classes[1] && classes[1] == classes[2]) || (classes[1] == classes[2] && classes[2] == classes[3]) || (classes[0] == classes[1] && classes[1] == classes[3]) || (classes[0] == classes[2] && classes[2] == classes[3])) {
						return true;
					}
				break;
				
				case '3+_race':
					if((races[0] == races[1] && races[1] == races[2]) || (races[1] == races[2] && races[2] == races[3]) || (races[0] == races[1] && races[1] == races[3]) || (races[0] == races[2] && races[2] == races[3])) {
						return true;
					}
				break;
				
				case 'all_diff_class':
					if(classes[0] != classes[1] && classes[0] != classes[2] && classes[0] != classes[3] && classes[1] != classes[2] && classes[1] != classes[3] && classes[2] != classes[3]) {
						return true;
					}
				break;
				
				case 'all_diff_race':
					if(races[0] != races[1] && races[0] != races[2] && races[0] != races[3] && races[1] != races[2] && races[1] != races[3] && races[2] != races[3]) {
						return true;
					}
				break;
				
				case 'm_level':
					if(stats[i][3] >= sqMissionSolver.missionLevel) {
						return true;
					}
				break;
				
				case 'in_squadron':
					if(mission == true) {
						return true;
					}
				break;
				
				case 'above_50':
					if(Number(stats[i][3]) >= 50) {
						return true;
					}
				break;
				
				case 'affinity':
					/*if(sqMissionSolver.missionBonus[0] !== '' && sqMissionSolver.missionBonus[1] !== '' && sqMissionSolver.missionBonus[0] !== '') {
						return true;
					}*/
					if(sqMissionSolver.missionBonus[0] == stats[i][2] || sqMissionSolver.missionBonus[0] == stats[i][4] || sqMissionSolver.missionBonus[1] == stats[i][2] || sqMissionSolver.missionBonus[1] == stats[i][4] ||sqMissionSolver.missionBonus[2] == stats[i][2] || sqMissionSolver.missionBonus[2] == stats[i][4]) {
						return true;
					}
					else {
						return false;
					}
				break;
			}
			
			races[i] = null;
			classes[i] = null;
			
			if((/*stats[i][4] != '' &&*/ chemistry[0][0] !== '_' && (races.indexOf(chemistry[0]) > -1 || classes.indexOf(chemistry[0]) > -1 || sqMissionSolver.missionBonus.indexOf(stats[i][2]) > -1 || sqMissionSolver.missionBonus.indexOf(stats[i][4]) > -1))) {	
				return true;
			}
			else if((/*stats[i][4] != '' &&*/ chemistry[0][0] == '_' && (races.indexOf(chemistry[0].substr(1)) == -1 && classes.indexOf(chemistry[0].substr(1)) == -1 || sqMissionSolver.missionBonus.indexOf(stats[i][2]) > -1 || sqMissionSolver.missionBonus.indexOf(stats[i][4]) > -1))) {
				return true;
			}
			else {
				return false;
			}
		},
				
		/*
		 * SEARCH FOR WORKING COMBINATIONS AND DISPLAY THE RESULTS
		 */
		resolve : function() {
			sqMissionSolver.reset();
			$('#how-to-use').hide();
			
			/* Not enough recruits with all the necessary data */
			if(sqMissionSolver.getSquadron()[sqMissionSolver.activeSquadron].length == 0 || sqMissionSolver.squadron.filter(function(val) { return val.length > 0 && val[10] == true }).length < 4) {
				$("#possible").prepend('<div class="result-line"><div id="not-possible">Minimo 4 membri (selezionati) con tutti i campi compilati (classe, livello, razza) per iniziare una simulazione.</div></div>');
				return false; 
			}
			
			var sq = JSON.parse(JSON.stringify(sqMissionSolver.squadron.filter(function(val) { return val[10] == true ? val : false; })));
			sq = sq.filter(function(e) { return e.length > 0 });
			
			var combinations = sqMissionSolver.getCombinations(sq, 4); 
			var nbCombinations = combinations.length;
			
			var trainingCombinations = [];
			var trainingCombinationsWithoutGeneral = [];
			sqMissionSolver.getAllPossiblePermutations([1,2,3,4,5,6,7], sqMissionSolver.maxTrainings, trainingCombinations);
			sqMissionSolver.getAllPossiblePermutations([1,2,3,4,5,6], sqMissionSolver.maxTrainings, trainingCombinationsWithoutGeneral);
			
			$('#possible').html('<div class="result-line"><div id="calc-in-progress">Attendi.</div></div>');
			
			/* Looking for matching combinations */
			var combinationFound = false;
			var start = new Date().getTime();
			
			setTimeout(function() {
				for(var l = 0; l < nbCombinations; l += 1) {
					var _this = combinations[l];
					var totalStats = sqMissionSolver.getTotalStats(_this);
					var phy = totalStats[0] + sqMissionSolver.bonusSquadron[0];
					var men = totalStats[1] + sqMissionSolver.bonusSquadron[1];
					var tac = totalStats[2] + sqMissionSolver.bonusSquadron[2];
					
					var bonusChemistry = totalStats[3];
					var bonusPhyChemistry = totalStats[3][0][0] + totalStats[3][1][0] + totalStats[3][2][0] + totalStats[3][3][0];
					var bonusMenChemistry = totalStats[3][0][1] + totalStats[3][1][1] + totalStats[3][2][1] + totalStats[3][3][1];
					var bonusTacChemistry = totalStats[3][0][2] + totalStats[3][1][2] + totalStats[3][2][2] + totalStats[3][3][2];
					
					phy += bonusPhyChemistry;
					men += bonusMenChemistry;
					tac += bonusTacChemistry;
					
					var currentCombination = [_this[0], _this[1], _this[2], _this[3]];
					
					/* No need for the general training if the 4 members are lvl 60 */
					var totalLevel = _this[0][3] + _this[1][3] + _this[2][3] + _this[3][3];
					if(totalLevel == 240) {
						var nbTrainingCombinations = trainingCombinationsWithoutGeneral.length;
						trainingCombinations = trainingCombinationsWithoutGeneral;
					}
					else {
						var nbTrainingCombinations = trainingCombinations.length;
					}
								
					/* Training needed */
					if((phy < sqMissionSolver.missionGoals[0] || men < sqMissionSolver.missionGoals[1] || tac < sqMissionSolver.missionGoals[2]) && sqMissionSolver.maxTrainings > 0) {
						var missingPhy = sqMissionSolver.missionGoals[0] - phy;
						var missingMen = sqMissionSolver.missionGoals[1] - men;
						var missingTac = sqMissionSolver.missionGoals[2] - tac;
											
						/* 2/3 combinations */
						if(phy >= sqMissionSolver.missionGoals[0] ^ men >= sqMissionSolver.missionGoals[1] ? tac >= sqMissionSolver.missionGoals[2] : phy >= sqMissionSolver.missionGoals[0]) {
							var missingPoints = (missingPhy > 0 ? missingPhy : 0) + (missingMen > 0 ? missingMen : 0) + (missingTac > 0 ? missingTac : 0);
							sqMissionSolver.almostMatching.push([currentCombination, sqMissionSolver.bonusSquadron, [], bonusChemistry, missingPoints]);
						}
	
						var lowestNbOfTrainings = sqMissionSolver.maxTrainings;
						var matchingCombination = [];
					
						for(var j = 0; j < nbTrainingCombinations; j += 1) {
							var _thisCopy = [];
							for(var k = 0; k <= 3; k += 1) {
								_thisCopy[k] = [_this[k][0], [_this[k][1][0], _this[k][1][1], _this[k][1][2]], _this[k][2], _this[k][3], _this[k][4], _this[k][5], _this[k][6], _this[k][7], _this[k][8]];
							}
													
							switch (trainingCombinations[j].length) {
								case 0:
									var _that = [];
								break;
								
								case 1:
									var _that = [trainingCombinations[j][0]];
								break;
								
								case 2:
									var _that = [trainingCombinations[j][0], trainingCombinations[j][1]];
								break;
								
								case 3:
									var _that = [trainingCombinations[j][0], trainingCombinations[j][1], trainingCombinations[j][2]];
								break;
								
								case 4:
									var _that = [trainingCombinations[j][0], trainingCombinations[j][1], trainingCombinations[j][2], trainingCombinations[j][3]];
								break;
								
								case 5:
									var _that = [trainingCombinations[j][0], trainingCombinations[j][1], trainingCombinations[j][2], trainingCombinations[j][3], trainingCombinations[j][4]];
								break;
								
								case 6:
									var _that = [trainingCombinations[j][0], trainingCombinations[j][1], trainingCombinations[j][2], trainingCombinations[j][3], trainingCombinations[j][4], trainingCombinations[j][5]];
								break;
							}
							
							var returnTraining = sqMissionSolver.generateTraining(_thisCopy, false, false, false, _that, lowestNbOfTrainings, false, totalStats);

							if(returnTraining[3] < lowestNbOfTrainings) {
								lowestNbOfTrainings = returnTraining[3];
								matchingCombination = [];
							}							
							if(returnTraining !== false) {
								matchingCombination.push([returnTraining[0], returnTraining[1], returnTraining[2], returnTraining[4], totalStats[4], totalStats[5]]);
								combinationFound = true;
							}
							
							if(j == nbTrainingCombinations - 1) {
								if(matchingCombination.length > 0)
									sqMissionSolver.processResult(matchingCombination, false);
							}
						}
					}
					
					/* If the combination works, its processed without training. */
					else if(phy >= sqMissionSolver.missionGoals[0] && men >= sqMissionSolver.missionGoals[1] && tac >= sqMissionSolver.missionGoals[2]) {
						sqMissionSolver.processResult([[currentCombination, sqMissionSolver.bonusSquadron, [], JSON.parse(JSON.stringify(bonusChemistry)), totalStats[4],  totalStats[5]]], false);
						combinationFound = true;
					}
					
					/* 2/3 when no training */
					else {
						var missingPhy = sqMissionSolver.missionGoals[0] - phy;
						var missingMen = sqMissionSolver.missionGoals[1] - men;
						var missingTac = sqMissionSolver.missionGoals[2] - tac;
											
						/* 2/3 combinations */
						if(phy >= sqMissionSolver.missionGoals[0] ^ men >= sqMissionSolver.missionGoals[1] ? tac >= sqMissionSolver.missionGoals[2] : phy >= sqMissionSolver.missionGoals[0]) {
							var missingPoints = (missingPhy > 0 ? missingPhy : 0) + (missingMen > 0 ? missingMen : 0) + (missingTac > 0 ? missingTac : 0);
							sqMissionSolver.almostMatching.push([[_this[0], _this[1], _this[2], _this[3]], sqMissionSolver.bonusSquadron, [], bonusChemistry, missingPoints]);
						}
					}
					
					/* Display of the 2/3 combinations if no training was allowed and no results without training found */
					if(l == nbCombinations - 1 && combinationFound == false) {
						var nbAlmostMatching = sqMissionSolver.almostMatching.length;
						$.each(sqMissionSolver.almostMatching, function(i) {
							var last = i == nbAlmostMatching - 1 ? true : false;
							sqMissionSolver.processResult(this, true, last);
						});
						if(nbAlmostMatching == 0) {
							$("#possible").html('<div class="result-line"><div id="not-possible">No acceptable result found. <p>You cannot do this mission with the selected recruits and all the 3 stats matched in ' + sqMissionSolver.maxTrainings + ' training(s) or less, and you cannot match 2 of the 3 stats without training. It\'s maybe possible to match 2 of 3 stats with trainings, but these results are not displayed yet.</p></div></div>');
						}
					}
					
					if(l == nbCombinations - 1) {
						var end = new Date().getTime();
						var time = end - start;
						console.log('Execution time: ' + time);
					}
				}
			}, 0);
		},
		
		processResult : function(results, noResults, last) {
			$('#calc-in-progress').parent().remove();
			
			if(results.length >= 1 && noResults == false) {
				results.sort(function(a, b) { 
					return a[2].length - b[2].length || b[2].filter(function(val) { return val == 7; }).length - a[2].filter(function(val) { return val == 7; }).length;
				});
				results = JSON.parse(JSON.stringify(results[0]));
				
				var dataTrainings = results[2].length;
				var dataPriority = results[2].filter(function(val) { return val == 7; }).length;
				var dataLevel = results[0][0][3] + results[0][1][3] + results[0][2][3] + results[0][3][3];
				var dataChemistriesActivated = Number(results[4][0]) + Number(results[4][1]) + Number(results[4][2]) + Number(results[4][3]);
				var div = $('<div class="result-line" data-trainings="' + dataTrainings + '" data-level="' + dataLevel + '" data-priority="' + dataPriority + '" data-chemPriority="' + results[5] + '" data-chemistries="' + dataChemistriesActivated + '"></div>');
			}
			else if(noResults == true) {
				var div = $('<div class="result-line" data-missing-points="' + results[4] + '"></div>');
			}
			
			var divSquadron = $('<div class="squadron"><div class="title-stat">Squadrone</div></div>').appendTo(div);
			var divStatsAndTraining = $('<div class="stats-and-training"></div>').appendTo(div);
			var divTraining = $('<div class="training"><div class="title-stat">Allenamento</div></div>');
			var divImagesTraining = $('<div class="images-training"></div>').appendTo(divTraining);
			var append = '#possible';
			var totalInitialStats = [0, 0, 0];
			var totalFinalStats = [0, 0, 0];
			var trainingExists = false;

			$.each(results[0], function(index, value) {
				totalInitialStats = $.map(totalInitialStats, function(val, i) {
					return val += sqMissionSolver.squadron[value[0]][1][i];
				});
				totalFinalStats = $.map(totalFinalStats, function(val, i) {
					return val += value[1][i];
				});
				
				var chemistry = results[4][index] == true ? 'chemistry' : '';
				var race = sqMissionSolver.capitalize(results[0][index][4]);
				var name = results[0][index][8] !== '' ? sqMissionSolver.capitalize(results[0][index][8]) : 'Unknown name';
				
				var initialLevel = sqMissionSolver.squadron[value[0]][3];
				$('<div class="images"><img src="img/' + value[2] + '.png" title="' + (sqMissionSolver.squadron[value[0]][0] + 1) + '. ' + sqMissionSolver.capitalize(sqMissionSolver.squadron[value[0]][2]) + ' - ' + sqMissionSolver.squadron[value[0]][3] + ' - ' + race + ' - ' + name + '"/><div class="niveau ' + chemistry + '">' + value[3] + '</div><div class="niveau ' + chemistry + '">(' + initialLevel + ')</div></div>').appendTo(divSquadron);
			});

			$.each(results[2], function(index, value) {
				$('<img src="img/' + value + '.png" />').appendTo(divImagesTraining);
				trainingExists = true;
			});
			
			if(trainingExists == true) {
				divTraining.appendTo(divStatsAndTraining);
			}
			
			totalInitialStats = $.map(totalInitialStats, function(val, i) {
				return val += sqMissionSolver.bonusSquadron[i];
			});
			
			totalFinalStats = $.map(totalFinalStats, function(val, i) {
				return val += results[1][i] + results[3][0][i] + results[3][1][i] + results[3][2][i] + results[3][3][i];
			});
			
			/* Colorize the stats */
			var initialColor = ['green', 'green', 'green'];
			var finalColor = ['green', 'green', 'green'];
			$.each(initialColor, function(ind, val) {
				if(totalInitialStats[ind] < sqMissionSolver.missionGoals[ind]) {
					initialColor[ind] = 'red';
				}
				if(totalFinalStats[ind] < sqMissionSolver.missionGoals[ind]) {
					finalColor[ind] = 'red';
				}
			});
			
			var divChemistries = '';
			var bonusActivation = 0;
			$.each(results[4], function(index, value) {
				if(value == true && results[0][index][6][2] === 'chem_percentage') {
					bonusActivation += Number(results[0][index][6][1]);
				}
			});
			$.each(results[4], function(index, value) {
				if(value == true && results[0][index][6][2] !== 'phy' && results[0][index][6][2] !== 'men' && results[0][index][6][2] !== 'tac' && results[0][index][6][2] !== 'exp' && results[0][index][6][2] !== 'chem_percentage') {
					var chemistry = results[0][index][6][2];
					var valChemistry 	= sqMissionSolver.missionBonus.indexOf(results[0][index][2]) > -1 || sqMissionSolver.missionBonus.indexOf(results[0][index][4]) > -1 
										? 100 
										: Number(results[0][index][6][1]) + Number(bonusActivation);

					divChemistries += '<div><div class="img-chem"><img src="img/' + chemistry + '.png" /></div><div class="val-chem">' + valChemistry + '%</div></div>';
				}
			});
			
			if(divChemistries != '')
				$('<div class="chemistries"><div class="title-stat">Chemistries</div>' + divChemistries + '</div>').prependTo(divStatsAndTraining);
			
			$('<div class="stats"><div class="title-stat">Final stats</div><div><div class="n-stat">PHY</div><span class="' + finalColor[0] + '">' + totalFinalStats[0] + '</span></div><div><div class="n-stat">MEN</div><span class="' + finalColor[1] + '">' + totalFinalStats[1] + '</span></div><div><div class="n-stat">TAC</div><span class="' + finalColor[2] + '">' + totalFinalStats[2] + '</span></div></div>').prependTo(divStatsAndTraining);
			
			div.appendTo(append);
			
			/* Sort the results */
			var resultLines = $('.result-line');
			if(noResults == false) {
				resultLines.sort(function(a, b) {
					return $(a).attr('data-trainings') - $(b).attr('data-trainings') || $(a).attr('data-level') - $(b).attr('data-level') || $(b).attr('data-priority') - $(a).attr('data-priority') || $(b).attr('data-chemPriority') - $(a).attr('data-chemPriority') || $(b).attr('data-chemistries') - $(a).attr('data-chemistries');
				});
				$("#possible").html(resultLines);
			}
			else {
				var resultLines = $('.result-line');
				resultLines.sort(function(a, b) {
					return $(a).attr('data-missing-points') - $(b).attr('data-missing-points');
				});
				
				if(last == true) {
					$("#possible").html(resultLines).prepend('<div class="result-line"><div id="not-possible">No solution found to match the 3 stats in ' + sqMissionSolver.maxTrainings + ' training(s) or less. The following combinations only match 2 of the 3 stats, without training. Please note that the chemistries are not marked as activated even if they are, for these results. This will come at a later time.</div></div>');
				}
			}
		},
		
		/*
		 * ADD EXP TO THE SQUAD, FROM A MISSION
		 */
		addExp : function(training) {
			var exp = 0;
			var type;
			
			if(!isNaN(parseInt($('#command-exp-reward').val()))) {
				exp = parseInt($('#command-exp-reward').val());
				type = 'command';
			}
			else if(!isNaN(parseInt($('#trainee-exp-reward').val()))) {
				exp = parseInt($('#trainee-exp-reward').val());
				type = 'trainee';
			}
			var recruits = [];
			
			$('#select-classes-exp img.active').each(function() {
				var id = parseInt(this.id.slice(-1));
				recruits.push(id);
			});
			
			if(exp > 0 && recruits.length == 3 && type == 'command') {
				sqMissionSolver.squadron = sqMissionSolver.generateExpGain(sqMissionSolver.squadron, exp, recruits, true, 'command');
				sqMissionSolver.saveFromObject();
				sqMissionSolver.load();
				
				$('#command-exp-reward').val('');
				$('#select-classes-exp img.active').removeClass('active');
			}
			else if(exp > 0 && recruits.length == 4 && type == 'trainee') {
				sqMissionSolver.squadron = sqMissionSolver.generateExpGain(sqMissionSolver.squadron, exp, recruits, true, null);
				sqMissionSolver.saveFromObject();
				sqMissionSolver.load();
				
				$('#trainee-exp-reward').val('');
				$('#select-classes-exp img.active').removeClass('active');
			}
			
			$('#b-apply-exp-reward').attr('disabled', true);
		},
		
		/*
		 * ADD EXP TO EACH RECRUIT OF THE SQUADRON OR COMBINATION AND UPDATE THE STATS OF A RECRUIT IF A NEW LEVEL IS REACHED
		 */
		generateExpGain : function(squadron, exp, recruits, mission, type) {		
			for(var i = 0, sqLength = squadron.length; i < sqLength; i += 1) {
				var _this = squadron[i];
				
				/* Jump to the next iteration if the unit does not have the required data */
				if(_this[9] === false)
					continue;
				
				var recruitsLength = recruits.length;
				
				if((recruits && recruitsLength > 0 && recruits.indexOf(_this[0]) > -1) || !recruits && _this[2] && _this[2] !== '') {
					var multi = 1;
					/* Chemistry in the case of a mission reward */
					if(recruits && recruitsLength > 0 && mission == true) {
						if(_this[6] != '') {
							var chemistry = _this[6];	
							if(chemistry[2] == 'exp' /*&& type !== 'command'*/) {
								var chemistryActivated = sqMissionSolver.isChemistryActivated(squadron, i, mission, [squadron[0][4], squadron[1][4], squadron[2][4], squadron[3][4]], [squadron[0][2], squadron[1][2], squadron[2][2], squadron[3][2]], chemistry);
								
								if(chemistryActivated == true && chemistry[2] == 'exp') {
									multi += chemistry[1] / 100;
									
									if(sqMissionSolver.missionBonus.indexOf(_this[2]) > -1 || sqMissionSolver.missionBonus.indexOf(_this[4]) > -1 && _this[4]) {
										multi += chemistry[1] / 100;
									}
								}
							}
						}
					}

					var nextLevel = sqMissionSolver.exp[_this[3] - 1];
					_this[5] += parseInt(exp * multi);
					
					while(_this[5] >= nextLevel && _this[3] < 60) {
						var stats = sqMissionSolver.stats[_this[2]][_this[3]];
						_this[1][0] = stats[0];
						_this[1][1] = stats[1];
						_this[1][2] = stats[2];				
						_this[5] -= nextLevel;
						_this[3] += 1;
						nextLevel = sqMissionSolver.exp[_this[3] - 1];
					}
					
					if(_this[3] == 60) {
						_this[5] = 0;
					}
				}
			}
			
			return squadron;
		},
		
		/*
		 * UNLOCK THE TRAINING BUTTON IF A TRAINING IS SELECTED
		 */
		activeConfirmTraining : function() {
			if($('.training-icon.active').length == 1) {
				$('#b-confirm-training').prop('disabled', false);
			}	
		},
		
		/*
		 * LOCK THE TRAINING BUTTON (WHEN THE TRAINING IS CHANGED OR APPLIED)
		 */
		deactiveConfirmTraining : function() {
			$('#b-confirm-training').prop('disabled', true);
		},
		
		/* 
		 * TRANSFORM A +40-/20-/20 TRAINING INTO A +40/-40/0 ONE IF NEEDED
		 */
		 transformTraining : function(trainings, id, bonus) {
			if(!bonus) {
				bonus = sqMissionSolver.bonusSquadron;
			}
			switch(id) {
				case 0:
					if(bonus[1] == 0) {
						trainings[id] = [40, 0, -40]
					}
					if(bonus[2] == 0) {
						trainings[id] = [40, -40, 0]
					}
				break;
				
				case 1:
					if(bonus[0] == 0) {
						trainings[id] = [0, 40, -40]
					}
					if(bonus[2] == 0) {
						trainings[id] = [-40, 40, 0]
					}
				break;
				
				case 2:
					if(bonus[0] == 0) {
						trainings[id] = [0, -40, 40]
					}
					if(bonus[1] == 0) {
						trainings[id] = [-40, 0, 40]
					}
				break;
			}
			return trainings;
		},
		
		/*
		 * APPLY A TRAINING TO THE SQUAD
		 */
		applyTraining : function() {			
			var training = $('.training-icon.active');
			var id = Number(training.prop('id').slice(-1)) - 1;
			var maxPts = sqMissionSolver.squadronRank;
			
			var bSq = sqMissionSolver.bonusSquadron;
			var tr = sqMissionSolver.trainings.slice(0);
			tr = sqMissionSolver.transformTraining(tr, id);
			
			if((bSq[0] + tr[id][0] <= maxPts && bSq[0] + tr[id][0] >= 0 && bSq[1] + tr[id][1] <= maxPts && bSq[1] + tr[id][1] >= 0 && bSq[2] + tr[id][2] <= maxPts && bSq[2] + tr[id][2] >= 0) || bSq[0] + bSq[1] + bSq[2] < maxPts) {
				var bPhy = $('#b-phy');
				var bMen = $('#b-men');
				var bTac = $('#b-tac');
				
				if(sqMissionSolver.bonusSquadron[0] + sqMissionSolver.bonusSquadron[1] + sqMissionSolver.bonusSquadron[2] < maxPts) {
					sqMissionSolver.bonusSquadron[0] = Number(bPhy.val()) + (tr[id][0] > 0 ? tr[id][0] : 0);
					sqMissionSolver.bonusSquadron[1] = Number(bMen.val()) + (tr[id][1] > 0 ? tr[id][1] : 0);
					sqMissionSolver.bonusSquadron[2] = Number(bTac.val()) + (tr[id][2] > 0 ? tr[id][2] : 0);
				}
				else {
					sqMissionSolver.bonusSquadron[0] = Number(bPhy.val()) + tr[id][0];
					sqMissionSolver.bonusSquadron[1] = Number(bMen.val()) + tr[id][1];
					sqMissionSolver.bonusSquadron[2] = Number(bTac.val()) + tr[id][2];
				}
				
				bPhy.val(sqMissionSolver.bonusSquadron[0]);
				bMen.val(sqMissionSolver.bonusSquadron[1]);
				bTac.val(sqMissionSolver.bonusSquadron[2]);
				
				var recruits = [];
				var arrRecruits = $('#select-classes-exp img.active').each(function() {
					var id = Number(this.id.slice(-1));
					recruits.push(id);
				});
				
				recruits = recruits.length > 0 && recruits.length <= 4 ? recruits : false;
							
				sqMissionSolver.deactiveConfirmTraining();
				sqMissionSolver.squadron = sqMissionSolver.generateExpGain(sqMissionSolver.squadron, sqMissionSolver.expTrainings[id], recruits, false, null);
				sqMissionSolver.saveFromObject();
				sqMissionSolver.load();
			}
		},
		
		getPermutations : function(array, size, initialStuff, trainingCombinations) {
			if (initialStuff.length >= size) {
				trainingCombinations.push(initialStuff);
			} else {
				var i;
				
				for (i = 0; i < array.length; ++i) {	
					sqMissionSolver.getPermutations(array, size, initialStuff.concat(array[i]), trainingCombinations);
				}
			}
		},
		
		getAllPossiblePermutations : function(array, size, trainingCombinations) {
			sqMissionSolver.getPermutations(array, size, [], trainingCombinations);
		},
	
		generateTraining : function(squadron, bonusSquadronTemp, trainings, nbOfLoops, listOfTrainings, lowest, loop, totalStats) {
			/* First loop */
			if(loop == false) {
				/* New bonus from the training */
				bonusSquadronTemp = sqMissionSolver.bonusSquadron.slice();
				
				/* No trainings allowed */
				if(sqMissionSolver.maxTrainings == 0) {
					return bonusSquadronTemp;
				}
				
				var nbOfLoops = 0;
				var trainings = [];
			}
			
			if(nbOfLoops >= lowest) {
				return false;
			}

			/* Training impossible, end the loop */
			switch(listOfTrainings[0]) {
				case 1:
					if(sqMissionSolver.squadronRank - bonusSquadronTemp[0] < 40) { return false; }
				break;
				
				case 2:
					if(sqMissionSolver.squadronRank - bonusSquadronTemp[1] < 40) { return false; }
				break;
				
				case 3:
					if(sqMissionSolver.squadronRank - bonusSquadronTemp[2] < 40) { return false; }
				break;
				
				case 4:
					if(bonusSquadronTemp[2] < 40 || sqMissionSolver.squadronRank - bonusSquadronTemp[0] == 0 || sqMissionSolver.squadronRank - bonusSquadronTemp[1] == 0) { return false; }
				break;
				
				case 5:
					if(bonusSquadronTemp[1] < 40 || sqMissionSolver.squadronRank - bonusSquadronTemp[0] == 0 || sqMissionSolver.squadronRank - bonusSquadronTemp[2] == 0) { return false; }
				break;
				
				case 6:
					if(bonusSquadronTemp[0] < 40 || sqMissionSolver.squadronRank - bonusSquadronTemp[1] == 0 || sqMissionSolver.squadronRank - bonusSquadronTemp[2] == 0) { return false; }
				break;
			}
			
			var exp = listOfTrainings[0] == 7 ? 3000 : 2000;
			var id = listOfTrainings[0] - 1;
			
			var trainingsModified = sqMissionSolver.trainings.slice(0);
			trainingsModified = sqMissionSolver.transformTraining(trainingsModified, id, bonusSquadronTemp);

			/* No simulation of the training is needed if the 4 members are level 60 */
			var levelSquadron = squadron[0][3] + squadron[1][3] + squadron[2][3] + squadron[3][3];
			if(levelSquadron < 240) {
				squadron = sqMissionSolver.generateExpGain(squadron, exp, false, false, null);
			}
			
			/* Recalculate the stats only if a level is gained */
			var levelSquadronAfter = squadron[0][3] + squadron[1][3] + squadron[2][3] + squadron[3][3];
			if(levelSquadronAfter > levelSquadron || !totalStats) {
				var totalStats = sqMissionSolver.getTotalStats(squadron);
			}

			var phy = totalStats[0] + bonusSquadronTemp[0];
			var men = totalStats[1] + bonusSquadronTemp[1];
			var tac = totalStats[2] + bonusSquadronTemp[2];
			
			var bonusChemistry = totalStats[3];
			var bonusPhyChemistry = bonusChemistry[0][0] + bonusChemistry[1][0] + bonusChemistry[2][0] + bonusChemistry[3][0];
			var bonusMenChemistry = bonusChemistry[0][1] + bonusChemistry[1][1] + bonusChemistry[2][1] + bonusChemistry[3][1];
			var bonusTacChemistry = bonusChemistry[0][2] + bonusChemistry[1][2] + bonusChemistry[2][2] + bonusChemistry[3][2];
			
			phy += bonusPhyChemistry;
			men += bonusMenChemistry;
			tac += bonusTacChemistry;

			var missgPhy = sqMissionSolver.missionGoals[0] - phy - trainingsModified[id][0];
			var missgMen = sqMissionSolver.missionGoals[1] - men - trainingsModified[id][1];
			var missgTac = sqMissionSolver.missionGoals[2] - tac - trainingsModified[id][2];
			
			if(bonusSquadronTemp[0] + bonusSquadronTemp[1] + bonusSquadronTemp[2] < sqMissionSolver.squadronRank) {
				bonusSquadronTemp[0] += trainingsModified[id][0] > 0 ? trainingsModified[id][0] : 0;
				bonusSquadronTemp[1] += trainingsModified[id][1] > 0 ? trainingsModified[id][1] : 0;
				bonusSquadronTemp[2] += trainingsModified[id][2] > 0 ? trainingsModified[id][2] : 0;
			}
			else {
				bonusSquadronTemp[0] += trainingsModified[id][0];
				bonusSquadronTemp[1] += trainingsModified[id][1];
				bonusSquadronTemp[2] += trainingsModified[id][2];
			}
			
			nbOfLoops += 1;
			trainings.push(listOfTrainings[0]);
			
			if(missgPhy <= 0 && missgMen <= 0 && missgTac <= 0) {
				return [squadron, bonusSquadronTemp, trainings, nbOfLoops, bonusChemistry];
			}
			else if(listOfTrainings.length == 1) {
				return false;
			}
			else {
				listOfTrainings.shift();
				return sqMissionSolver.generateTraining(squadron, bonusSquadronTemp, trainings, nbOfLoops, listOfTrainings, lowest, true, totalStats);
			}
		},
		
		/*
		 * OPEN THE CHEMISTRY WINDOW
		 */
		openChemistry : function(chemistry) {
			$('#c-window-chemistry').show();
			$('#windows').fadeIn(100);
			$('#windows').on('click', function(e) { 
				if($(e.target).parent()[0] == $(this)[0]) {
					$(this).off();
					$(this).fadeOut(100);
					$('> div', this).hide();
				}
			});
			
			sqMissionSolver.chemistry = Number($(chemistry).next().prop('id').slice(-1));
			
			$('#all_members').removeAttr('checked');
			if(sqMissionSolver.squadron[sqMissionSolver.chemistry - 1][6] != '') {
				var def = sqMissionSolver.squadron[sqMissionSolver.chemistry - 1][6];

				$('#trigger-chemistry').val(def[0]);
				$('#bonus-chemistry').val(def[1]);
				$('#stat-chemistry').val(def[2]);
				if(def[3] == 'true') {
					$('#all_members').prop('checked', true);
				}
				
				$("input:radio").prop('checked', false);
				if(!isNaN(Number(def[4]))) {
					$('input[name=priority-chemistry][value=' + def[4] + ']').prop('checked', 'checked');
				}
			}
			else {
				$('#trigger-chemistry, #bonus-chemistry, #stat-chemistry').val('');
				$("input:radio").prop('checked', false);
			}
		},
		
		/*
		 * APPLY THE CHEMISTRY FOR THE RECRUIT
		 */
		applyChemistry : function() {
			var race = $('#trigger-chemistry').val();
			var bonus = $('#bonus-chemistry').val();
			var stat = $('#stat-chemistry').val();
			var all = $('#all_members').is(':checked');
			var chemistry = $('#chemistry-recruit-' + sqMissionSolver.chemistry);
			var index = sqMissionSolver.chemistry - 1;
			var priority = $('input[name=priority-chemistry]:checked').val()

			if(race != '' && bonus != '' && stat != '' && !isNaN(parseInt(priority))) {
				$('#windows').off().fadeOut(100);
				$('#windows > div').hide();
				var str = race + '|' + bonus + '|' + stat + '|' + all + '|' + priority;
				chemistry.val(str);
				sqMissionSolver.squadron[index][6] = [race, bonus, stat, all, priority];
				sqMissionSolver.saveFromObject();
				$(chemistry).prev().addClass('active');
			}
		},
		
		/*
		 * APPLY THE RENAME OF SQUADRONS
		 */
		applyRenameSquadron : function() {
			var names = {'1': $('#name-sq-1').val(), '2': $('#name-sq-2').val(), '3': $('#name-sq-3').val(), '4': $('#name-sq-4').val(), '5': $('#name-sq-5').val()}
			localStorage.setItem('squadronNames', JSON.stringify(names));
			
			sqMissionSolver.updateSquadronNames();
			$('#windows').off().fadeOut(100);
			$('#windows > div').hide();
		},
		
		/*
		 * DELETE THE CHEMISTRY FOR THE RECRUIT
		 */
		deleteChemistry : function() {
			$('#windows').off().fadeOut(100);
			$('#windows > div').hide();
			var chemistry = $('#chemistry-recruit-' + sqMissionSolver.chemistry);
			var index = sqMissionSolver.chemistry - 1;
			chemistry.val('');
			sqMissionSolver.squadron[index][6] = '';
			sqMissionSolver.saveFromObject();
			$(chemistry).prev().removeClass('active');
		}, 
		
		/*
		 * OPEN THE RENAME SQUADRONS WINDOW
		 */
		openRenameSquadrons : function() {
			$('#c-window-rename').show();
			
			var settings = JSON.parse(localStorage.getItem('squadronNames'));
			
			for(var i = 1; i <= 5; i++) {
				$('#name-sq-' + i).val(settings[i]);
			}
						
			$('#windows').fadeIn(100);
			$('#windows').on('click', function(e) { 
				if($(e.target).parent()[0] == $(this)[0]) {
					$(this).off();
					$(this).fadeOut(100);
					$('> div', this).hide();
				}
			});
		},
		
		/*
		 * OPEN THE EXPORT WINDOW
		 */
		openExportSquadron : function() {
			$('#c-window-export').show();
			$('#export-text').val('');
			
			var squadron = sqMissionSolver.getSquadron();

			if(Object.keys(squadron[sqMissionSolver.activeSquadron]).length > 0) {
				var exportCode = JSON.stringify(squadron[sqMissionSolver.activeSquadron]);
				$('#export-text').val(btoa(exportCode));
			}
			
			$('#windows').fadeIn(100);
			$('#windows').on('click', function(e) { 
				if($(e.target).parent()[0] == $(this)[0]) {
					$(this).off();
					$(this).fadeOut(100);
					$('> div', this).hide();
				}
			});
		},
		
		/*
		 * OPEN THE IMPORT WINDOW
		 */
		openImportSquadron : function() {	
			$('#c-window-import').show();
			$('#import-text').val('');
			$('#windows').fadeIn(100);
			$('#windows').on('click', function(e) { 
				if($(e.target).parent()[0] == $(this)[0]) {
					$(this).off();
					$(this).fadeOut(100);
					$('> div', this).hide();
				}
			});
		},
		
		/*
		 * IMPORT A SQUADRON
		 */
		importSquadron : function() {
			var importCode = atob($('#import-text').val());
			
			try {
				JSON.parse(importCode);
			} catch (e) {
				$('#import-text').val('Invalid import code.');
				return false;
			}
			
			var squadron = sqMissionSolver.getSquadron();
			squadron[sqMissionSolver.activeSquadron] = JSON.parse(importCode);
			localStorage.setItem('squadron', JSON.stringify(squadron));
			sqMissionSolver.load();
			
			$('#import-text').val('');
			$('#windows').off().fadeOut(100);
			$('#windows > div').hide();
		},
		
		/*
		 * OPEN THE CLEAR WINDOW
		 */
		openClearSquadron : function() {	
			$('#c-window-clear').show();
			$('#clear-text').val('');
			$('#windows').fadeIn(100);
			
			$('#windows').on('click', function(e) { 
				if($(e.target).parent()[0] == $(this)[0]) {
					$('#cancel-clear-squadron').off();
					$('#clear-squadron').off();
					$(this).off();
					$(this).fadeOut(100);
					$('> div', this).hide();
				}
			});
			
			$('#clear-squadron').one('click', function() {
				var squadron = sqMissionSolver.getSquadron();
				squadron[sqMissionSolver.activeSquadron] = {};
				localStorage.setItem('squadron', JSON.stringify(squadron));
				sqMissionSolver.load();
				
				$('#windows').off().fadeOut(100);
				$('#windows > div').hide();
				$('#cancel-clear-squadron').off();
			});
			
			$('#cancel-clear-squadron').one('click', function() {
				$('#windows').off().fadeOut(100);
				$('#windows > div').hide();
				$('#clear-squadron').off();
			});
		},
	};
	
	sqMissionSolver.init();
});