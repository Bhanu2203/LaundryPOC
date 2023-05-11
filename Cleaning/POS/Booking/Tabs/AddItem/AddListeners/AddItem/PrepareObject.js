let StartFunc = ({ inTabPane }) => {
    let jVarObjectToInsert = jFLocalPrepareObject({ inTabPane });
    return jVarObjectToInsert;
};

let jFLocalPrepareObject = ({ inTabPane }) => {
    try {
        let jVarClosestTabPane = inTabPane;

        // let jVarLocalItemSelect = jVarClosestTabPane.querySelector(".ItemSelect");
        let jVarLocalWashType = jVarClosestTabPane.querySelector(".WashTypeClass");
        let jVarLocalPcs = jVarClosestTabPane.querySelector(".PcsClass");
        let jVarLocalRate = jVarClosestTabPane.querySelector(".RateClass");

        let jVarLocalCategory = jVarClosestTabPane.dataset.category;
        let jVarLocalItemSelect = jFLocalItemSelect({ inTabPane });

        let localItemSelect = selectItemByValue({ inHtmlSelect: jVarLocalItemSelect.ItemSerialID });
        let localWashSelect = selectItemByValue({ inHtmlSelect: jVarLocalWashType });
        let localPcs = jFLocalFromDomAsInt({ inHtmlId: jVarLocalPcs });
        let localRate = jFLocalFromDomAsInt({ inHtmlId: jVarLocalRate });
        let jVarlocalItemSerial = jFLocalItemSerialClass({ inTabPane });
        let jVarlocalLocation = jFLocalFactoriesSelect({ inTabPane });
        let localLocationSelect = selectItemByValue({ inHtmlSelect: jVarlocalLocation.locationID });
        let jVarLocalDeliveryDateTime = jFLocalDeliveryDateTimeClass({ inTabPane });

        let localReturnObject = {
            ItemSerial: jVarlocalItemSerial.ItemSerial,
            Category: jVarLocalCategory,
            ItemName: localItemSelect,
            ItemNamePk: jVarLocalItemSelect.ItemSerial,
            WashType: localWashSelect,
            WashTypePk: jVarLocalItemSelect.ItemSerial,
            locationPk: jVarlocalLocation.location,
            location: localLocationSelect,
            ...localPcs,
            ...localRate,
            AddOn: "0-0",
            DeliveryDateTime: jVarLocalDeliveryDateTime.DeliveryDateTime,
            Total: Object.values(localPcs)[0] * Object.values(localRate)[0]
        };

        return localReturnObject;
    } catch (error) {
        console.log("error : ", error);
    };
};

let jFLocalItemSerialClass = ({ inTabPane }) => {
    try {
        // let jVarClosestTabPane = inTabPane;
        let jVarLocalItemsTableBodyId = document.getElementById("ItemsTableBodyId");

        // let jVarLocalItemSerialClass = jVarClosestTabPane.querySelector(".ItemSerialClass");

        // let localReturnObject = {
        //     ItemSerial: jVarLocalItemSerialClass.value
        // };

        let localReturnObject = {
            ItemSerial: jVarLocalItemsTableBodyId.rows.length + 1
        };

        return localReturnObject;
    } catch (error) {
        console.log("error : ", error);
    };
};

let jFLocalItemSelect = ({ inTabPane }) => {
    try {
        let jVarClosestTabPane = inTabPane;
        let jVarLocalItemSerialClass = jVarClosestTabPane.querySelector(".ItemSelect");

        let localReturnObject = {
            ItemSerial: jVarLocalItemSerialClass.value,
            ItemSerialID: jVarLocalItemSerialClass
        };

        return localReturnObject;
    } catch (error) {
        console.log("error : ", error);
    };
};

let jFLocalFactoriesSelect = ({ inTabPane }) => {
    try {
        let jVarClosestTabPane = inTabPane;
        let jVarLocalFactorySelectClass = jVarClosestTabPane.querySelector(".FactorySelectClass");

        let localReturnObject = {
            location: jVarLocalFactorySelectClass.value,
            locationID: jVarLocalFactorySelectClass
        };

        return localReturnObject;
    } catch (error) {
        console.log("error : ", error);
    };
};

let jFLocalFromDomAsInt = ({ inHtmlId }) => {
    let jVarLocalReturnObject = {};
    let jVarLocalPcsId = inHtmlId;

    let jVarLocalPcsIdValue = jVarLocalPcsId.value;
    let jVarLocalPcsIdName = jVarLocalPcsId.name;

    jVarLocalReturnObject[jVarLocalPcsIdName] = parseInt(jVarLocalPcsIdValue);
    return jVarLocalReturnObject;
};

function selectItemByValue({ inHtmlSelect }) {
    for (var i = 0; i < inHtmlSelect.options.length; i++) {
        if (inHtmlSelect.options[i].value === inHtmlSelect.value) {
            return inHtmlSelect.options[i].text;
        }
    }
};

let jFLocalDeliveryDateTimeClass = ({ inTabPane }) => {
    try {
        let jVarClosestTabPane = inTabPane;
        let jVarLocalItemSerialClass = jVarClosestTabPane.querySelector(".DeliveryDateTimeClass");

        let localReturnObject = {
            DeliveryDateTime: jVarLocalItemSerialClass.value
        };

        return localReturnObject;
    } catch (error) {
        console.log("error : ", error);
    };
};

//Kid's tab funcs end
export { StartFunc };