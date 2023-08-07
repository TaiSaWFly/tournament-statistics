function getEnvironment() {
    var environment = {
        spreadsheetID: "",
        firebaseUrl: ""
    };
    return environment;
}

function getImportSheetName() {
    var sheetName = {
        ids: "",
        db: "",
        matchesDb: ""
    };

    return sheetName;
}

// Creates a Google Sheets on change trigger for the specific sheet
function createSpreadsheetEditTrigger(sheetID) {
    var triggers = ScriptApp.getProjectTriggers();
    var triggerExists = false;
    for (var i = 0; i < triggers.length; i++) {
        if (triggers[i].getTriggerSourceId() == sheetID) {
            triggerExists = true;
            break;
        }
    }

    if (!triggerExists) {
        var spreadsheet = SpreadsheetApp.openById(sheetID);

        ScriptApp.newTrigger("importSheet")
            .forSpreadsheet(spreadsheet)
            .onChange()
            .create();
    }
}

// Delete all the existing triggers for the project
function deleteTriggers() {
    var triggers = ScriptApp.getProjectTriggers();
    for (var i = 0; i < triggers.length; i++) {
        ScriptApp.deleteTrigger(triggers[i]);
    }
}

// Initialize
function initialize(e) {
    writeDataToFirebase(getEnvironment().spreadsheetID);
}

// Write the data to the Firebase URL
function writeDataToFirebase(sheetID) {
    var ss = SpreadsheetApp.openById(sheetID);
    SpreadsheetApp.setActiveSpreadsheet(ss);
    createSpreadsheetEditTrigger(sheetID);
    var sheetsIDs = ss.getSheetByName(getImportSheetName().ids);
    var sheetsDb = ss.getSheetByName(getImportSheetName().db);
    var sheetsMatchesDb = ss.getSheetByName(getImportSheetName().matchesDb);

    var sheets = [sheetsIDs, sheetsDb, sheetsMatchesDb];

    for (var i = 0; i < sheets.length; i++) {
        importSheet(sheets[i]);
        SpreadsheetApp.setActiveSheet(sheets[i]);
    }
}

// A utility function to generate nested object when
// given a keys in array format
function assign(obj, keyPath, value) {
    lastKeyIndex = keyPath.length - 1;
    for (var i = 0; i < lastKeyIndex; ++i) {
        key = keyPath[i];
        if (!(key in obj)) obj[key] = {};
        obj = obj[key];
    }
    obj[keyPath[lastKeyIndex]] = value;
}

// Import each sheet when there is a change
function importSheet() {
    var sheet = SpreadsheetApp.getActiveSheet();
    var name = sheet.getName();
    var isImportSheet =
        name == getImportSheetName().ids ||
        name == getImportSheetName().db ||
        name === getImportSheetName().matchesDb;

    if (isImportSheet) {
        var data = sheet.getDataRange().getValues();

        var dataToImport = {};

        for (var i = 1; i < data.length; i++) {
            dataToImport[data[i][0]] = {};
            for (var j = 0; j < data[0].length; j++) {
                assign(
                    dataToImport[data[i][0]],
                    data[0][j].split("__"),
                    data[i][j]
                );
            }
        }

        var token = ScriptApp.getOAuthToken();

        var firebaseUrl =
            getEnvironment().firebaseUrl +
            sheet.getParent().getId() +
            "/" +
            name;
        var base = FirebaseApp.getDatabaseByUrl(firebaseUrl, token);
        base.setData("", dataToImport);
    }
}
