(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/_1ab6f8._.js", {

"[project]/src/ui/Button.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
const Button = ({ label, onClick, disabled = false, type })=>{
    const baseStyles = "px-4 py-2 rounded font-medium focus:outline-none";
    const variant = "bg-white border-2 h-12 hover:border-none text-black hover:bg-yellow-400 hover:text-black hover:scale-110 disabled:bg-blue-300 ease-in-out transition delay-50 cursor-pointerease-in-out transition delay-50 cursor-pointer w-30  w-36";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: onClick,
        disabled: disabled,
        className: `${baseStyles} ${variant}`,
        type: type,
        children: label
    }, void 0, false, {
        fileName: "[project]/src/ui/Button.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
};
_c = Button;
const __TURBOPACK__default__export__ = Button;
var _c;
__turbopack_refresh__.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/utils/structureNum.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "transformStructureNum": (()=>transformStructureNum)
});
function transformStructureNum(input) {
    // Check for any digits
    if (/[^0-9]/.test(input)) {
        return input; // return str
    } else {
        return parseInt(input, 10); // return int
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/utils/trimQuotes.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "trimQuotes": (()=>trimQuotes)
});
function trimQuotes(input) {
    return input.replace(/^['"]|['"]$/g, "");
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/BridgeList.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$structureNum$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/structureNum.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$trimQuotes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/trimQuotes.ts [app-client] (ecmascript)");
;
;
;
const BridgeList = ({ bridges, setSelectedStructureNumber })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-5 pt-0 h-screen overflow-y-auto min-w-[300px] bg-white shadow-md rounded-md space-y-4 text-black",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-xl font-semibold sticky top-0 bg-white z-10 p-5 border-b border-b-gray-500 w-full",
                children: "Bridges List"
            }, void 0, false, {
                fileName: "[project]/src/components/BridgeList.tsx",
                lineNumber: 15,
                columnNumber: 9
            }, this),
            bridges && bridges.length > 0 ? bridges.map((bridge)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    onClick: ()=>setSelectedStructureNumber(bridge.structureNumber),
                    className: "border p-2 rounded-md hover:scale-105 transition-all ease-in-out cursor-pointer",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "font-bold",
                            children: [
                                "Structure ",
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$structureNum$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformStructureNum"])(bridge.structureNumber)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/BridgeList.tsx",
                            lineNumber: 24,
                            columnNumber: 7
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$trimQuotes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trimQuotes"])(bridge.location)
                        }, void 0, false, {
                            fileName: "[project]/src/components/BridgeList.tsx",
                            lineNumber: 25,
                            columnNumber: 7
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: [
                                "Year Built: ",
                                bridge.yearBuilt
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/BridgeList.tsx",
                            lineNumber: 26,
                            columnNumber: 7
                        }, this)
                    ]
                }, bridge.structureNumber, true, {
                    fileName: "[project]/src/components/BridgeList.tsx",
                    lineNumber: 19,
                    columnNumber: 5
                }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-base text-gray-800",
                children: 'Click on "Apply Filters" to start'
            }, void 0, false, {
                fileName: "[project]/src/components/BridgeList.tsx",
                lineNumber: 30,
                columnNumber: 3
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/BridgeList.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
};
_c = BridgeList;
const __TURBOPACK__default__export__ = BridgeList;
var _c;
__turbopack_refresh__.register(_c, "BridgeList");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/ui/RangeInput.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const RangeInput = ({ label, value, onChange, min = 0, max })=>{
    const handleMinChange = (e)=>{
        const min = parseInt(e.target.value, 10) || 0;
        onChange({
            ...value,
            min
        });
    };
    const handleMaxChange = (e)=>{
        const max = parseInt(e.target.value, 10) || 0;
        onChange({
            ...value,
            max
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col space-y-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "text-gray-600 font-medium",
                children: label
            }, void 0, false, {
                fileName: "[project]/src/ui/RangeInput.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        min: min,
                        type: "number",
                        placeholder: "Min",
                        value: value.min,
                        onChange: handleMinChange,
                        className: "outline-none px-4 py-2 w-full border border-gray-300 rounded focus:ring-2 focus:ring-black text-black"
                    }, void 0, false, {
                        fileName: "[project]/src/ui/RangeInput.tsx",
                        lineNumber: 32,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        max: max,
                        type: "number",
                        placeholder: "Max",
                        value: value.max,
                        onChange: handleMaxChange,
                        className: "outline-none px-4 py-2 w-full border border-gray-300 rounded focus:ring-2 focus:ring-black text-black"
                    }, void 0, false, {
                        fileName: "[project]/src/ui/RangeInput.tsx",
                        lineNumber: 40,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/ui/RangeInput.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/ui/RangeInput.tsx",
        lineNumber: 29,
        columnNumber: 5
    }, this);
};
_c = RangeInput;
const __TURBOPACK__default__export__ = RangeInput;
var _c;
__turbopack_refresh__.register(_c, "RangeInput");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/utils/reverseMap.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
{
// Reverse mapping: from service name to its integer key
__turbopack_esm__({
    "reverseMap": (()=>reverseMap)
});
const reverseMap = (map)=>{
    return Object.entries(map).reduce((acc, [key, value])=>{
        acc[value] = key;
        return acc;
    }, {});
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/filter-files/FilterCondition.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$DropDown$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/ui/DropDown.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$RangeInput$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/ui/RangeInput.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$reverseMap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/reverseMap.ts [app-client] (ecmascript)");
;
;
;
;
const conditionMap = {
    "N": "NOT APPLICABLE",
    "9": "EXCELLENT",
    "8": "VERY GOOD",
    "7": "GOOD",
    "6": "SATISFACTORY",
    "5": "FAIR",
    "4": "POOR",
    "3": "SERIOUS",
    "2": "CRITICAL",
    "1": '"IMMINENT" FAILURE',
    "0": "FAILED"
};
const overallConditionMap = {
    "F": "FAIR",
    "G": "GOOD",
    "P": "POOR"
};
// Reverse maps
const reverseConditionMap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$reverseMap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reverseMap"])(conditionMap);
const reverseOverallConditionMap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$reverseMap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reverseMap"])(overallConditionMap);
const FilterCondition = ({ filterParams, handleFilterChange })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "grid grid-cols-2 gap-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$DropDown$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        label: "Bridge Condition",
                        options: Object.values(overallConditionMap),
                        selected: overallConditionMap[filterParams.bridgeCondition],
                        onSelect: (value)=>{
                            const selectedKey = reverseOverallConditionMap[value];
                            handleFilterChange("bridgeCondition", selectedKey);
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/filter-files/FilterCondition.tsx",
                        lineNumber: 57,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$DropDown$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        label: "Deck Condition",
                        options: Object.values(conditionMap),
                        selected: conditionMap[filterParams.deckCond],
                        onSelect: (value)=>{
                            const selectedKey = reverseConditionMap[value];
                            handleFilterChange("deckCond", selectedKey);
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/filter-files/FilterCondition.tsx",
                        lineNumber: 67,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$DropDown$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        label: "Superstructure Condition",
                        options: Object.values(conditionMap),
                        selected: conditionMap[filterParams.superstructureCond],
                        onSelect: (value)=>{
                            const selectedKey = reverseConditionMap[value];
                            handleFilterChange("superstructureCond", selectedKey);
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/filter-files/FilterCondition.tsx",
                        lineNumber: 77,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$DropDown$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        label: "Substructure Condition",
                        options: Object.values(conditionMap),
                        selected: conditionMap[filterParams.substructureCond],
                        onSelect: (value)=>{
                            const selectedKey = reverseConditionMap[value];
                            handleFilterChange("substructureCond", selectedKey);
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/filter-files/FilterCondition.tsx",
                        lineNumber: 87,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$DropDown$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        label: "Channel Condition",
                        options: Object.values(conditionMap),
                        selected: conditionMap[filterParams.channelCond],
                        onSelect: (value)=>{
                            const selectedKey = reverseConditionMap[value];
                            handleFilterChange("channelCond", selectedKey);
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/filter-files/FilterCondition.tsx",
                        lineNumber: 97,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$DropDown$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        label: "Culvert Condition",
                        options: Object.values(conditionMap),
                        selected: conditionMap[filterParams.culvertCond],
                        onSelect: (value)=>{
                            const selectedKey = reverseConditionMap[value];
                            handleFilterChange("culvertCond", selectedKey);
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/filter-files/FilterCondition.tsx",
                        lineNumber: 107,
                        columnNumber: 7
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/filter-files/FilterCondition.tsx",
                lineNumber: 56,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 gap-2 space",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$DropDown$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        label: "Structural Evaluation",
                        options: Object.values(conditionMap),
                        selected: conditionMap[filterParams.structuralEval],
                        onSelect: (value)=>{
                            const selectedKey = reverseConditionMap[value];
                            handleFilterChange("structuralEval", selectedKey);
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/filter-files/FilterCondition.tsx",
                        lineNumber: 120,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$DropDown$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        label: "Deck Geometry Evaluation",
                        options: Object.values(conditionMap),
                        selected: conditionMap[filterParams.deckGeometryEval],
                        onSelect: (value)=>{
                            const selectedKey = reverseConditionMap[value];
                            handleFilterChange("deckGeometryEval", selectedKey);
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/filter-files/FilterCondition.tsx",
                        lineNumber: 130,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$DropDown$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        label: "Under Clearance Evaluation",
                        options: Object.values(conditionMap),
                        selected: conditionMap[filterParams.underclearanceEval],
                        onSelect: (value)=>{
                            const selectedKey = reverseConditionMap[value];
                            handleFilterChange("underclearanceEval", selectedKey);
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/filter-files/FilterCondition.tsx",
                        lineNumber: 139,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$DropDown$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        label: "Waterway Evaluation",
                        options: Object.values(conditionMap),
                        selected: conditionMap[filterParams.waterwayEval],
                        onSelect: (value)=>{
                            const selectedKey = reverseConditionMap[value];
                            handleFilterChange("waterwayEval", selectedKey);
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/filter-files/FilterCondition.tsx",
                        lineNumber: 148,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$RangeInput$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        label: "Approach Road Evaluation",
                        value: filterParams.apprRoadEval,
                        onChange: (value)=>handleFilterChange("apprRoadEval", value),
                        min: 0,
                        max: 8
                    }, void 0, false, {
                        fileName: "[project]/src/components/filter-files/FilterCondition.tsx",
                        lineNumber: 158,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$RangeInput$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        label: "Posting Evaluation",
                        value: filterParams.postingEval,
                        onChange: (value)=>handleFilterChange("postingEval", value),
                        min: 0,
                        max: 5
                    }, void 0, false, {
                        fileName: "[project]/src/components/filter-files/FilterCondition.tsx",
                        lineNumber: 165,
                        columnNumber: 7
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/filter-files/FilterCondition.tsx",
                lineNumber: 119,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/filter-files/FilterCondition.tsx",
        lineNumber: 54,
        columnNumber: 5
    }, this);
};
_c = FilterCondition;
const __TURBOPACK__default__export__ = FilterCondition;
var _c;
__turbopack_refresh__.register(_c, "FilterCondition");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/ui/TextInput.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const TextInput = ({ label, placeholder, value, onChange, description })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col space-y-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "text-gray-600 font-medium",
                children: label
            }, void 0, false, {
                fileName: "[project]/src/ui/TextInput.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        placeholder: placeholder,
                        value: value,
                        onChange: onChange,
                        className: "outline-none px-4 py-2 w-full border border-gray-300 rounded focus:ring-2 focus:ring-black text-black"
                    }, void 0, false, {
                        fileName: "[project]/src/ui/TextInput.tsx",
                        lineNumber: 22,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: description
                    }, void 0, false, {
                        fileName: "[project]/src/ui/TextInput.tsx",
                        lineNumber: 29,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/ui/TextInput.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/ui/TextInput.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
};
_c = TextInput;
const __TURBOPACK__default__export__ = TextInput;
var _c;
__turbopack_refresh__.register(_c, "TextInput");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/filter-files/FilterBridge.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$TextInput$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/ui/TextInput.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$DropDown$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/ui/DropDown.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$RangeInput$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/ui/RangeInput.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$reverseMap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/reverseMap.ts [app-client] (ecmascript)");
;
;
;
;
;
const serviceMap = {
    "1": "Highway, with or without pedestrian",
    "2": "Railroad",
    "3": "Pedestrian-bicycle",
    "4": "Highway-railroad",
    "5": "Waterway",
    "6": "Highway-waterway",
    "7": "Railroad-waterway",
    "8": "Highway-waterway-railroad",
    "9": "Relief for waterway",
    "0": "Other"
};
const highwayMap = {
    "1": "Interstate highway",
    "2": "U.S. numbered highway",
    "3": "State highway",
    "4": "County highway",
    "5": "City street",
    "6": "Federal lands road",
    "7": "State lands road",
    "8": "Other (include toll roads not otherwise)"
};
const FilterBridge = ({ filterParams, handleFilterChange })=>{
    const reverseServiceMap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$reverseMap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reverseMap"])(serviceMap);
    const reverseHighwayMap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$reverseMap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reverseMap"])(highwayMap);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "grid grid-cols-3 gap-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$TextInput$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                label: "Location",
                placeholder: "Enter State Code",
                value: filterParams.location,
                onChange: (e)=>handleFilterChange("stateCode", e.target.value)
            }, void 0, false, {
                fileName: "[project]/src/components/filter-files/FilterBridge.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$RangeInput$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                label: "Year Built",
                value: filterParams.yearBuilt,
                onChange: (value)=>handleFilterChange("yearBuilt", value),
                min: 1697,
                max: 2021
            }, void 0, false, {
                fileName: "[project]/src/components/filter-files/FilterBridge.tsx",
                lineNumber: 58,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$RangeInput$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                label: "Year Reconstructed",
                value: filterParams.yearReconstructed,
                onChange: (value)=>handleFilterChange("yearReconstructed", value),
                min: 0,
                max: 2021
            }, void 0, false, {
                fileName: "[project]/src/components/filter-files/FilterBridge.tsx",
                lineNumber: 65,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$DropDown$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                label: "Federal Agency",
                options: [
                    "Y",
                    "N"
                ],
                selected: filterParams.fedAgency,
                onSelect: (value)=>{
                    handleFilterChange("fedAgency", value);
                }
            }, void 0, false, {
                fileName: "[project]/src/components/filter-files/FilterBridge.tsx",
                lineNumber: 72,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$DropDown$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                label: "Highway",
                options: Object.values(highwayMap),
                selected: highwayMap[String(filterParams.routePrefix)],
                onSelect: (value)=>{
                    const selectedKey = reverseHighwayMap[value];
                    handleFilterChange("routePrefix", parseInt(selectedKey, 10)); // Parse key back to number
                }
            }, void 0, false, {
                fileName: "[project]/src/components/filter-files/FilterBridge.tsx",
                lineNumber: 80,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$DropDown$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                label: "Service",
                options: Object.values(serviceMap),
                selected: serviceMap[String(filterParams.serviceOn)],
                onSelect: (value)=>{
                    const selectedKey = reverseServiceMap[value];
                    handleFilterChange("serviceOn", parseInt(selectedKey, 10));
                }
            }, void 0, false, {
                fileName: "[project]/src/components/filter-files/FilterBridge.tsx",
                lineNumber: 89,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/filter-files/FilterBridge.tsx",
        lineNumber: 51,
        columnNumber: 5
    }, this);
};
_c = FilterBridge;
const __TURBOPACK__default__export__ = FilterBridge;
var _c;
__turbopack_refresh__.register(_c, "FilterBridge");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/utils/geoConversion.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "convertLatitude": (()=>convertLatitude),
    "convertLongitude": (()=>convertLongitude)
});
const convertLatitude = (rawLat)=>{
    return rawLat / 1000000; // Divide by 1,000,000 to get decimal degrees
};
const convertLongitude = (rawLong)=>{
    return -rawLong / 1000000;
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/Mapbox.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$map$2d$gl$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/react-map-gl/dist/esm/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$geoConversion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/geoConversion.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$structureNum$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/structureNum.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$trimQuotes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/trimQuotes.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$map$2d$gl$2f$dist$2f$esm$2f$exports$2d$mapbox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/react-map-gl/dist/esm/exports-mapbox.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
;
;
;
;
;
;
const Mapbox = ({ bridges })=>{
    _s();
    // Track the structureNumber of the clicked bridge
    const [selectedBridge, setSelectedBridge] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    console.log(selectedBridge);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex h-screen flex-grow w-full p-4 bg-white shadow-md rounded-md",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$map$2d$gl$2f$dist$2f$esm$2f$exports$2d$mapbox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Map"], {
            mapboxAccessToken: ("TURBOPACK compile-time value", "pk.eyJ1IjoiYWhtYWRoYXdhbWRhaCIsImEiOiJjbTRidmltcDYwNGVvMmpwc3k0YnpkNXUwIn0.F-9_tsy0z7DuM2mD2BBPow"),
            initialViewState: {
                longitude: -79.99,
                latitude: 40.44,
                zoom: 10
            },
            mapStyle: "mapbox://styles/ahmadhawamdah/cm4g9ldnm008m01ra7osc4t0w",
            children: bridges?.map((bridge)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$map$2d$gl$2f$dist$2f$esm$2f$exports$2d$mapbox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Marker"], {
                            longitude: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$geoConversion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["convertLongitude"])(bridge.long),
                            latitude: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$geoConversion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["convertLatitude"])(bridge.lat),
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "animate-bounce cursor-pointer text-xl",
                                onClick: (e)=>{
                                    e.stopPropagation();
                                    setSelectedBridge(bridge);
                                },
                                children: [
                                    "🌉",
                                    " "
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Mapbox.tsx",
                                lineNumber: 35,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/Mapbox.tsx",
                            lineNumber: 31,
                            columnNumber: 13
                        }, this),
                        selectedBridge?.long === bridge.long ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$map$2d$gl$2f$dist$2f$esm$2f$exports$2d$mapbox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Popup"], {
                            longitude: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$geoConversion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["convertLongitude"])(selectedBridge.long),
                            latitude: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$geoConversion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["convertLatitude"])(selectedBridge.lat),
                            anchor: "top",
                            onClose: ()=>setSelectedBridge(null),
                            closeOnClick: true,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "z-20",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: " text-base text-black ",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: " Structure "
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Mapbox.tsx",
                                                lineNumber: 56,
                                                columnNumber: 21
                                            }, this),
                                            " ",
                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$structureNum$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformStructureNum"])(bridge.structureNumber)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Mapbox.tsx",
                                        lineNumber: 55,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs  text-gray-800",
                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$trimQuotes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trimQuotes"])(bridge.location)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Mapbox.tsx",
                                        lineNumber: 59,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-gray-800",
                                        children: [
                                            "Year Built: ",
                                            bridge.yearBuilt
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Mapbox.tsx",
                                        lineNumber: 62,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Mapbox.tsx",
                                lineNumber: 54,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/Mapbox.tsx",
                            lineNumber: 47,
                            columnNumber: 15
                        }, this) : false
                    ]
                }, bridge.structureNumber, true, {
                    fileName: "[project]/src/components/Mapbox.tsx",
                    lineNumber: 30,
                    columnNumber: 11
                }, this))
        }, void 0, false, {
            fileName: "[project]/src/components/Mapbox.tsx",
            lineNumber: 20,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/Mapbox.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
};
_s(Mapbox, "29ghksf/izLpQaMGmVGRu56+8bg=");
_c = Mapbox;
const __TURBOPACK__default__export__ = Mapbox;
var _c;
__turbopack_refresh__.register(_c, "Mapbox");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/ui/Loading.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function Loading() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex justify-center items-center h-screen",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-12 h-12 border-4 border-yellow-500 border-t-transparent rounded-full animate-spin"
        }, void 0, false, {
            fileName: "[project]/src/ui/Loading.tsx",
            lineNumber: 6,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/ui/Loading.tsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
_c = Loading;
const __TURBOPACK__default__export__ = Loading;
var _c;
__turbopack_refresh__.register(_c, "Loading");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/bridge-info/BridgeCard.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$Loading$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/ui/Loading.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$structureNum$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/structureNum.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$bridge$2d$info$2f$Navigation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/bridge-info/Navigation.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
;
const BridgeCard = ({ structureNumber, setSelectedStructureNumber })=>{
    _s();
    const [bridgeData, setBridgeData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BridgeCard.useEffect": ()=>{
            if (!structureNumber) return;
            const fetchBridgeData = {
                "BridgeCard.useEffect.fetchBridgeData": async ()=>{
                    setLoading(true);
                    setError(null);
                    try {
                        const res = await fetch(`/api/bridge-info/${structureNumber}`);
                        if (!res.ok) {
                            throw new Error("Failed to fetch bridge details");
                        }
                        const data = await res.json();
                        setBridgeData(data);
                    } catch (err) {
                        setError(err.message || "An error occurred while fetching data.");
                    } finally{
                        setLoading(false);
                    }
                }
            }["BridgeCard.useEffect.fetchBridgeData"];
            fetchBridgeData();
        }
    }["BridgeCard.useEffect"], [
        structureNumber
    ]);
    if (!structureNumber) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-6 bg-white shadow-md rounded-md",
            children: "Select a bridge to view details."
        }, void 0, false, {
            fileName: "[project]/src/components/bridge-info/BridgeCard.tsx",
            lineNumber: 51,
            columnNumber: 7
        }, this);
    }
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$Loading$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/src/components/bridge-info/BridgeCard.tsx",
            lineNumber: 58,
            columnNumber: 12
        }, this);
    }
    if (error) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-6 bg-white shadow-md rounded-md text-red-500",
            children: error
        }, void 0, false, {
            fileName: "[project]/src/components/bridge-info/BridgeCard.tsx",
            lineNumber: 63,
            columnNumber: 7
        }, this);
    }
    if (!bridgeData) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-6 bg-white shadow-md rounded-md",
            children: "No data available for this bridge."
        }, void 0, false, {
            fileName: "[project]/src/components/bridge-info/BridgeCard.tsx",
            lineNumber: 71,
            columnNumber: 7
        }, this);
    }
    const { navigation, conditon, maintenance, geometry, Structure, history, serviceOn, routePrefix, fedAgency, ...bridge } = bridgeData;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-full bg-opacity-50 backdrop-blur-md fixed left-0 top-0 p-6 bg-white shadow-md rounded-md w-full text-black space-y-6 grid z-40",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-xl font-bold",
                        children: "Bridge Details"
                    }, void 0, false, {
                        fileName: "[project]/src/components/bridge-info/BridgeCard.tsx",
                        lineNumber: 93,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setSelectedStructureNumber(null),
                        className: "p-2 font-bold border-2 rounded-xl hover:scale-110 transition cursor-pointer ease-in-out",
                        children: "x"
                    }, void 0, false, {
                        fileName: "[project]/src/components/bridge-info/BridgeCard.tsx",
                        lineNumber: 94,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/bridge-info/BridgeCard.tsx",
                lineNumber: 92,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-lg font-semibold",
                                children: "General Information"
                            }, void 0, false, {
                                fileName: "[project]/src/components/bridge-info/BridgeCard.tsx",
                                lineNumber: 103,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-bold",
                                        children: "Structure Number:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/bridge-info/BridgeCard.tsx",
                                        lineNumber: 105,
                                        columnNumber: 13
                                    }, this),
                                    " ",
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$structureNum$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformStructureNum"])(bridge.structureNumber)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/bridge-info/BridgeCard.tsx",
                                lineNumber: 104,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-bold",
                                        children: "Location:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/bridge-info/BridgeCard.tsx",
                                        lineNumber: 109,
                                        columnNumber: 13
                                    }, this),
                                    " ",
                                    bridge.location
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/bridge-info/BridgeCard.tsx",
                                lineNumber: 108,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-bold",
                                        children: "Year Built:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/bridge-info/BridgeCard.tsx",
                                        lineNumber: 112,
                                        columnNumber: 13
                                    }, this),
                                    " ",
                                    bridge.yearBuilt
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/bridge-info/BridgeCard.tsx",
                                lineNumber: 111,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-bold",
                                        children: "Year Reconstructed:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/bridge-info/BridgeCard.tsx",
                                        lineNumber: 115,
                                        columnNumber: 13
                                    }, this),
                                    " ",
                                    bridge.yearReconstructed || "N/A"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/bridge-info/BridgeCard.tsx",
                                lineNumber: 114,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-bold",
                                        children: "Latitude:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/bridge-info/BridgeCard.tsx",
                                        lineNumber: 119,
                                        columnNumber: 13
                                    }, this),
                                    " ",
                                    bridge.lat
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/bridge-info/BridgeCard.tsx",
                                lineNumber: 118,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-bold",
                                        children: "Longitude:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/bridge-info/BridgeCard.tsx",
                                        lineNumber: 122,
                                        columnNumber: 13
                                    }, this),
                                    " ",
                                    bridge.long
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/bridge-info/BridgeCard.tsx",
                                lineNumber: 121,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-bold",
                                        children: "Route Prefix:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/bridge-info/BridgeCard.tsx",
                                        lineNumber: 125,
                                        columnNumber: 13
                                    }, this),
                                    " ",
                                    routePrefix
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/bridge-info/BridgeCard.tsx",
                                lineNumber: 124,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-bold",
                                        children: "Federal Agency:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/bridge-info/BridgeCard.tsx",
                                        lineNumber: 128,
                                        columnNumber: 13
                                    }, this),
                                    " ",
                                    fedAgency
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/bridge-info/BridgeCard.tsx",
                                lineNumber: 127,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-bold",
                                        children: "Service On:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/bridge-info/BridgeCard.tsx",
                                        lineNumber: 131,
                                        columnNumber: 13
                                    }, this),
                                    " ",
                                    serviceOn
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/bridge-info/BridgeCard.tsx",
                                lineNumber: 130,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-bold",
                                        children: "History:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/bridge-info/BridgeCard.tsx",
                                        lineNumber: 134,
                                        columnNumber: 13
                                    }, this),
                                    " ",
                                    history
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/bridge-info/BridgeCard.tsx",
                                lineNumber: 133,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/bridge-info/BridgeCard.tsx",
                        lineNumber: 102,
                        columnNumber: 9
                    }, this),
                    navigation && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$bridge$2d$info$2f$Navigation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        navigation: navigation
                    }, void 0, false, {
                        fileName: "[project]/src/components/bridge-info/BridgeCard.tsx",
                        lineNumber: 137,
                        columnNumber: 24
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/bridge-info/BridgeCard.tsx",
                lineNumber: 101,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/bridge-info/BridgeCard.tsx",
        lineNumber: 91,
        columnNumber: 5
    }, this);
};
_s(BridgeCard, "S7/4gwrYZ8xcinq+d3j3LOftr0M=");
_c = BridgeCard;
const __TURBOPACK__default__export__ = BridgeCard;
var _c;
__turbopack_refresh__.register(_c, "BridgeCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/Map9.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/ui/Button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$BridgeList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/BridgeList.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$filter$2d$files$2f$FilterCondition$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/filter-files/FilterCondition.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$filter$2d$files$2f$FilterBridge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/filter-files/FilterBridge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Mapbox$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/Mapbox.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$bridge$2d$info$2f$BridgeCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/bridge-info/BridgeCard.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
;
;
;
;
const Map9 = ({ type, filterParams, handleFilterChange })=>{
    _s();
    const [filteredResults, setFilteredResults] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedStructureNumber, setSelectedStructureNumber] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleApplyFilters = async ()=>{
        try {
            setLoading(true);
            const res = await fetch(`/api/${type}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(filterParams)
            });
            if (!res.ok) {
                throw new Error("Failed to fetch data");
            }
            const data = await res.json();
            setFilteredResults(data);
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally{
            setLoading(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white p-6 rounded-lg shadow-md mb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-xl font-semibold mb-4 text-black",
                        children: "Filters"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Map9.tsx",
                        lineNumber: 60,
                        columnNumber: 9
                    }, this),
                    type === "bridge" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$filter$2d$files$2f$FilterBridge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        filterParams: filterParams,
                        handleFilterChange: handleFilterChange
                    }, void 0, false, {
                        fileName: "[project]/src/components/Map9.tsx",
                        lineNumber: 62,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$filter$2d$files$2f$FilterCondition$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        filterParams: filterParams,
                        handleFilterChange: handleFilterChange
                    }, void 0, false, {
                        fileName: "[project]/src/components/Map9.tsx",
                        lineNumber: 67,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            onClick: handleApplyFilters,
                            label: loading ? "Loading..." : "Apply Filters"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Map9.tsx",
                            lineNumber: 73,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Map9.tsx",
                        lineNumber: 72,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Map9.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex h-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Mapbox$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        bridges: filteredResults
                    }, void 0, false, {
                        fileName: "[project]/src/components/Map9.tsx",
                        lineNumber: 81,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$BridgeList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        bridges: filteredResults,
                        setSelectedStructureNumber: setSelectedStructureNumber
                    }, void 0, false, {
                        fileName: "[project]/src/components/Map9.tsx",
                        lineNumber: 82,
                        columnNumber: 9
                    }, this),
                    selectedStructureNumber && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$bridge$2d$info$2f$BridgeCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        structureNumber: selectedStructureNumber,
                        setSelectedStructureNumber: setSelectedStructureNumber
                    }, void 0, false, {
                        fileName: "[project]/src/components/Map9.tsx",
                        lineNumber: 84,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Map9.tsx",
                lineNumber: 80,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Map9.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, this);
};
_s(Map9, "LASwgZZcidnJAB/QcHcGEUGhEuA=");
_c = Map9;
const __TURBOPACK__default__export__ = Map9;
var _c;
__turbopack_refresh__.register(_c, "Map9");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/(dashboard)/bridge/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Map9$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/Map9.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
const BridgeDashboard = ()=>{
    _s();
    const [bridgeFilterParams, setBridgeFilterParams] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        location: "",
        yearBuilt: {
            min: 1967,
            max: 2024
        },
        yearReconstructed: {
            min: 0,
            max: 2024
        },
        fedAgency: "",
        serviceOn: 0,
        routePrefix: 0
    });
    const handleFilterChange = (key, value)=>{
        setBridgeFilterParams((prev)=>({
                ...prev,
                [key]: value
            }));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Map9$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            type: "bridge",
            filterParams: bridgeFilterParams,
            handleFilterChange: handleFilterChange
        }, void 0, false, {
            fileName: "[project]/src/app/(dashboard)/bridge/page.tsx",
            lineNumber: 26,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/(dashboard)/bridge/page.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
};
_s(BridgeDashboard, "ZnRG2JGSU4HfcL+4hPG9sdHQmgU=");
_c = BridgeDashboard;
const __TURBOPACK__default__export__ = BridgeDashboard;
var _c;
__turbopack_refresh__.register(_c, "BridgeDashboard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/(dashboard)/bridge/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: require } = __turbopack_context__;
{
}}),
"[project]/node_modules/react-map-gl/dist/esm/components/use-map.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "MapProvider": (()=>MapProvider),
    "MountedMapsContext": (()=>MountedMapsContext),
    "useMap": (()=>useMap)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$map$2d$gl$2f$dist$2f$esm$2f$components$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-map-gl/dist/esm/components/map.js [app-client] (ecmascript)");
;
;
;
const MountedMapsContext = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createContext(null);
const MapProvider = (props)=>{
    const [maps, setMaps] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const onMapMount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "MapProvider.useCallback[onMapMount]": (map, id = 'default')=>{
            setMaps({
                "MapProvider.useCallback[onMapMount]": (currMaps)=>{
                    if (id === 'current') {
                        throw new Error("'current' cannot be used as map id");
                    }
                    if (currMaps[id]) {
                        throw new Error(`Multiple maps with the same id: ${id}`);
                    }
                    return {
                        ...currMaps,
                        [id]: map
                    };
                }
            }["MapProvider.useCallback[onMapMount]"]);
        }
    }["MapProvider.useCallback[onMapMount]"], []);
    const onMapUnmount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "MapProvider.useCallback[onMapUnmount]": (id = 'default')=>{
            setMaps({
                "MapProvider.useCallback[onMapUnmount]": (currMaps)=>{
                    if (currMaps[id]) {
                        const nextMaps = {
                            ...currMaps
                        };
                        delete nextMaps[id];
                        return nextMaps;
                    }
                    return currMaps;
                }
            }["MapProvider.useCallback[onMapUnmount]"]);
        }
    }["MapProvider.useCallback[onMapUnmount]"], []);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement(MountedMapsContext.Provider, {
        value: {
            maps,
            onMapMount,
            onMapUnmount
        }
    }, props.children);
};
function useMap() {
    var _a;
    const maps = (_a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(MountedMapsContext)) === null || _a === void 0 ? void 0 : _a.maps;
    const currentMap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$map$2d$gl$2f$dist$2f$esm$2f$components$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MapContext"]);
    const mapsWithCurrent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useMap.useMemo[mapsWithCurrent]": ()=>{
            return {
                ...maps,
                current: currentMap === null || currentMap === void 0 ? void 0 : currentMap.map
            };
        }
    }["useMap.useMemo[mapsWithCurrent]"], [
        maps,
        currentMap
    ]);
    return mapsWithCurrent;
} //# sourceMappingURL=use-map.js.map
}}),
"[project]/node_modules/react-map-gl/dist/esm/utils/deep-equal.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: require } = __turbopack_context__;
{
/**
 * Compare two points
 * @param a
 * @param b
 * @returns true if the points are equal
 */ __turbopack_esm__({
    "arePointsEqual": (()=>arePointsEqual),
    "deepEqual": (()=>deepEqual)
});
function arePointsEqual(a, b) {
    const ax = Array.isArray(a) ? a[0] : a ? a.x : 0;
    const ay = Array.isArray(a) ? a[1] : a ? a.y : 0;
    const bx = Array.isArray(b) ? b[0] : b ? b.x : 0;
    const by = Array.isArray(b) ? b[1] : b ? b.y : 0;
    return ax === bx && ay === by;
}
function deepEqual(a, b) {
    if (a === b) {
        return true;
    }
    if (!a || !b) {
        return false;
    }
    if (Array.isArray(a)) {
        if (!Array.isArray(b) || a.length !== b.length) {
            return false;
        }
        for(let i = 0; i < a.length; i++){
            if (!deepEqual(a[i], b[i])) {
                return false;
            }
        }
        return true;
    } else if (Array.isArray(b)) {
        return false;
    }
    if (typeof a === 'object' && typeof b === 'object') {
        const aKeys = Object.keys(a);
        const bKeys = Object.keys(b);
        if (aKeys.length !== bKeys.length) {
            return false;
        }
        for (const key of aKeys){
            if (!b.hasOwnProperty(key)) {
                return false;
            }
            if (!deepEqual(a[key], b[key])) {
                return false;
            }
        }
        return true;
    }
    return false;
} //# sourceMappingURL=deep-equal.js.map
}}),
"[project]/node_modules/react-map-gl/dist/esm/utils/transform.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "applyViewStateToTransform": (()=>applyViewStateToTransform),
    "cloneTransform": (()=>cloneTransform),
    "syncProjection": (()=>syncProjection),
    "transformToViewState": (()=>transformToViewState)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$map$2d$gl$2f$dist$2f$esm$2f$utils$2f$deep$2d$equal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-map-gl/dist/esm/utils/deep-equal.js [app-client] (ecmascript)");
;
function cloneTransform(tr) {
    const newTransform = tr.clone();
    // Work around mapbox bug - this value is not assigned in clone(), only in resize()
    newTransform.pixelsToGLUnits = tr.pixelsToGLUnits;
    return newTransform;
}
function syncProjection(src, dest) {
    if (!src.getProjection) {
        return;
    }
    const srcProjection = src.getProjection();
    const destProjection = dest.getProjection();
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$map$2d$gl$2f$dist$2f$esm$2f$utils$2f$deep$2d$equal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deepEqual"])(srcProjection, destProjection)) {
        dest.setProjection(srcProjection);
    }
}
function transformToViewState(tr) {
    return {
        longitude: tr.center.lng,
        latitude: tr.center.lat,
        zoom: tr.zoom,
        pitch: tr.pitch,
        bearing: tr.bearing,
        padding: tr.padding
    };
}
function applyViewStateToTransform(tr, props) {
    const v = props.viewState || props;
    let changed = false;
    if ('longitude' in v && 'latitude' in v) {
        const center = tr.center;
        // @ts-ignore
        tr.center = new center.constructor(v.longitude, v.latitude);
        changed = changed || center !== tr.center;
    }
    if ('zoom' in v) {
        const zoom = tr.zoom;
        tr.zoom = v.zoom;
        changed = changed || zoom !== tr.zoom;
    }
    if ('bearing' in v) {
        const bearing = tr.bearing;
        tr.bearing = v.bearing;
        changed = changed || bearing !== tr.bearing;
    }
    if ('pitch' in v) {
        const pitch = tr.pitch;
        tr.pitch = v.pitch;
        changed = changed || pitch !== tr.pitch;
    }
    if (v.padding && !tr.isPaddingEqual(v.padding)) {
        changed = true;
        tr.padding = v.padding;
    }
    return changed;
} //# sourceMappingURL=transform.js.map
}}),
"[project]/node_modules/react-map-gl/dist/esm/utils/style-utils.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "normalizeStyle": (()=>normalizeStyle)
});
const refProps = [
    'type',
    'source',
    'source-layer',
    'minzoom',
    'maxzoom',
    'filter',
    'layout'
];
function normalizeStyle(style) {
    if (!style) {
        return null;
    }
    if (typeof style === 'string') {
        return style;
    }
    if ('toJS' in style) {
        style = style.toJS();
    }
    if (!style.layers) {
        return style;
    }
    const layerIndex = {};
    for (const layer of style.layers){
        layerIndex[layer.id] = layer;
    }
    const layers = style.layers.map((layer)=>{
        let normalizedLayer = null;
        if ('interactive' in layer) {
            normalizedLayer = Object.assign({}, layer);
            // Breaks style diffing :(
            // @ts-ignore legacy field not typed
            delete normalizedLayer.interactive;
        }
        // Style diffing doesn't work with refs so expand them out manually before diffing.
        // @ts-ignore legacy field not typed
        const layerRef = layerIndex[layer.ref];
        if (layerRef) {
            normalizedLayer = normalizedLayer || Object.assign({}, layer);
            // @ts-ignore
            delete normalizedLayer.ref;
            // https://github.com/mapbox/mapbox-gl-js/blob/master/src/style-spec/deref.js
            for (const propName of refProps){
                if (propName in layerRef) {
                    normalizedLayer[propName] = layerRef[propName];
                }
            }
        }
        return normalizedLayer || layer;
    });
    // Do not mutate the style object provided by the user
    return {
        ...style,
        layers
    };
} //# sourceMappingURL=style-utils.js.map
}}),
"[project]/node_modules/react-map-gl/dist/esm/mapbox/mapbox.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>Mapbox)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$map$2d$gl$2f$dist$2f$esm$2f$utils$2f$transform$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-map-gl/dist/esm/utils/transform.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$map$2d$gl$2f$dist$2f$esm$2f$utils$2f$style$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-map-gl/dist/esm/utils/style-utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$map$2d$gl$2f$dist$2f$esm$2f$utils$2f$deep$2d$equal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-map-gl/dist/esm/utils/deep-equal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
;
;
;
const DEFAULT_STYLE = {
    version: 8,
    sources: {},
    layers: []
};
const pointerEvents = {
    mousedown: 'onMouseDown',
    mouseup: 'onMouseUp',
    mouseover: 'onMouseOver',
    mousemove: 'onMouseMove',
    click: 'onClick',
    dblclick: 'onDblClick',
    mouseenter: 'onMouseEnter',
    mouseleave: 'onMouseLeave',
    mouseout: 'onMouseOut',
    contextmenu: 'onContextMenu',
    touchstart: 'onTouchStart',
    touchend: 'onTouchEnd',
    touchmove: 'onTouchMove',
    touchcancel: 'onTouchCancel'
};
const cameraEvents = {
    movestart: 'onMoveStart',
    move: 'onMove',
    moveend: 'onMoveEnd',
    dragstart: 'onDragStart',
    drag: 'onDrag',
    dragend: 'onDragEnd',
    zoomstart: 'onZoomStart',
    zoom: 'onZoom',
    zoomend: 'onZoomEnd',
    rotatestart: 'onRotateStart',
    rotate: 'onRotate',
    rotateend: 'onRotateEnd',
    pitchstart: 'onPitchStart',
    pitch: 'onPitch',
    pitchend: 'onPitchEnd'
};
const otherEvents = {
    wheel: 'onWheel',
    boxzoomstart: 'onBoxZoomStart',
    boxzoomend: 'onBoxZoomEnd',
    boxzoomcancel: 'onBoxZoomCancel',
    resize: 'onResize',
    load: 'onLoad',
    render: 'onRender',
    idle: 'onIdle',
    remove: 'onRemove',
    data: 'onData',
    styledata: 'onStyleData',
    sourcedata: 'onSourceData',
    error: 'onError'
};
const settingNames = [
    'minZoom',
    'maxZoom',
    'minPitch',
    'maxPitch',
    'maxBounds',
    'projection',
    'renderWorldCopies'
];
const handlerNames = [
    'scrollZoom',
    'boxZoom',
    'dragRotate',
    'dragPan',
    'keyboard',
    'doubleClickZoom',
    'touchZoomRotate',
    'touchPitch'
];
class Mapbox {
    constructor(MapClass, props, container){
        // mapboxgl.Map instance
        this._map = null;
        // Internal states
        this._internalUpdate = false;
        this._inRender = false;
        this._hoveredFeatures = null;
        this._deferredEvents = {
            move: false,
            zoom: false,
            pitch: false,
            rotate: false
        };
        this._onEvent = (e)=>{
            // @ts-ignore
            const cb = this.props[otherEvents[e.type]];
            if (cb) {
                cb(e);
            } else if (e.type === 'error') {
                console.error(e.error); // eslint-disable-line
            }
        };
        this._onPointerEvent = (e)=>{
            if (e.type === 'mousemove' || e.type === 'mouseout') {
                this._updateHover(e);
            }
            // @ts-ignore
            const cb = this.props[pointerEvents[e.type]];
            if (cb) {
                if (this.props.interactiveLayerIds && e.type !== 'mouseover' && e.type !== 'mouseout') {
                    e.features = this._hoveredFeatures || this._queryRenderedFeatures(e.point);
                }
                cb(e);
                delete e.features;
            }
        };
        this._onCameraEvent = (e)=>{
            if (!this._internalUpdate) {
                // @ts-ignore
                const cb = this.props[cameraEvents[e.type]];
                if (cb) {
                    cb(e);
                }
            }
            if (e.type in this._deferredEvents) {
                this._deferredEvents[e.type] = false;
            }
        };
        this._MapClass = MapClass;
        this.props = props;
        this._initialize(container);
    }
    get map() {
        return this._map;
    }
    get transform() {
        return this._renderTransform;
    }
    setProps(props) {
        const oldProps = this.props;
        this.props = props;
        const settingsChanged = this._updateSettings(props, oldProps);
        if (settingsChanged) {
            this._createShadowTransform(this._map);
        }
        const sizeChanged = this._updateSize(props);
        const viewStateChanged = this._updateViewState(props, true);
        this._updateStyle(props, oldProps);
        this._updateStyleComponents(props, oldProps);
        this._updateHandlers(props, oldProps);
        // If 1) view state has changed to match props and
        //    2) the props change is not triggered by map events,
        // it's driven by an external state change. Redraw immediately
        if (settingsChanged || sizeChanged || viewStateChanged && !this._map.isMoving()) {
            this.redraw();
        }
    }
    static reuse(props, container) {
        const that = Mapbox.savedMaps.pop();
        if (!that) {
            return null;
        }
        const map = that.map;
        // When reusing the saved map, we need to reparent the map(canvas) and other child nodes
        // intoto the new container from the props.
        // Step 1: reparenting child nodes from old container to new container
        const oldContainer = map.getContainer();
        container.className = oldContainer.className;
        while(oldContainer.childNodes.length > 0){
            container.appendChild(oldContainer.childNodes[0]);
        }
        // Step 2: replace the internal container with new container from the react component
        // @ts-ignore
        map._container = container;
        // With maplibre-gl as mapLib, map uses ResizeObserver to observe when its container resizes.
        // When reusing the saved map, we need to disconnect the observer and observe the new container.
        // Step 3: telling the ResizeObserver to disconnect and observe the new container
        // @ts-ignore
        const resizeObserver = map._resizeObserver;
        if (resizeObserver) {
            resizeObserver.disconnect();
            resizeObserver.observe(container);
        }
        // Step 4: apply new props
        that.setProps({
            ...props,
            styleDiffing: false
        });
        map.resize();
        const { initialViewState } = props;
        if (initialViewState) {
            if (initialViewState.bounds) {
                map.fitBounds(initialViewState.bounds, {
                    ...initialViewState.fitBoundsOptions,
                    duration: 0
                });
            } else {
                that._updateViewState(initialViewState, false);
            }
        }
        // Simulate load event
        if (map.isStyleLoaded()) {
            map.fire('load');
        } else {
            map.once('styledata', ()=>map.fire('load'));
        }
        // Force reload
        // @ts-ignore
        map._update();
        return that;
    }
    /* eslint-disable complexity,max-statements */ _initialize(container) {
        const { props } = this;
        const { mapStyle = DEFAULT_STYLE } = props;
        const mapOptions = {
            ...props,
            ...props.initialViewState,
            accessToken: props.mapboxAccessToken || getAccessTokenFromEnv() || null,
            container,
            style: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$map$2d$gl$2f$dist$2f$esm$2f$utils$2f$style$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeStyle"])(mapStyle)
        };
        const viewState = mapOptions.initialViewState || mapOptions.viewState || mapOptions;
        Object.assign(mapOptions, {
            center: [
                viewState.longitude || 0,
                viewState.latitude || 0
            ],
            zoom: viewState.zoom || 0,
            pitch: viewState.pitch || 0,
            bearing: viewState.bearing || 0
        });
        if (props.gl) {
            // eslint-disable-next-line
            const getContext = HTMLCanvasElement.prototype.getContext;
            // Hijack canvas.getContext to return our own WebGLContext
            // This will be called inside the mapboxgl.Map constructor
            // @ts-expect-error
            HTMLCanvasElement.prototype.getContext = ()=>{
                // Unhijack immediately
                HTMLCanvasElement.prototype.getContext = getContext;
                return props.gl;
            };
        }
        const map = new this._MapClass(mapOptions);
        // Props that are not part of constructor options
        if (viewState.padding) {
            map.setPadding(viewState.padding);
        }
        if (props.cursor) {
            map.getCanvas().style.cursor = props.cursor;
        }
        this._createShadowTransform(map);
        // Hack
        // Insert code into map's render cycle
        const renderMap = map._render;
        map._render = (arg)=>{
            this._inRender = true;
            renderMap.call(map, arg);
            this._inRender = false;
        };
        const runRenderTaskQueue = map._renderTaskQueue.run;
        map._renderTaskQueue.run = (arg)=>{
            runRenderTaskQueue.call(map._renderTaskQueue, arg);
            this._onBeforeRepaint();
        };
        map.on('render', ()=>this._onAfterRepaint());
        // Insert code into map's event pipeline
        // eslint-disable-next-line @typescript-eslint/unbound-method
        const fireEvent = map.fire;
        map.fire = this._fireEvent.bind(this, fireEvent);
        // add listeners
        map.on('resize', ()=>{
            this._renderTransform.resize(map.transform.width, map.transform.height);
        });
        map.on('styledata', ()=>{
            this._updateStyleComponents(this.props, {});
            // Projection can be set in stylesheet
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$map$2d$gl$2f$dist$2f$esm$2f$utils$2f$transform$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["syncProjection"])(map.transform, this._renderTransform);
        });
        map.on('sourcedata', ()=>this._updateStyleComponents(this.props, {}));
        for(const eventName in pointerEvents){
            map.on(eventName, this._onPointerEvent);
        }
        for(const eventName in cameraEvents){
            map.on(eventName, this._onCameraEvent);
        }
        for(const eventName in otherEvents){
            map.on(eventName, this._onEvent);
        }
        this._map = map;
    }
    /* eslint-enable complexity,max-statements */ recycle() {
        // Clean up unnecessary elements before storing for reuse.
        const container = this.map.getContainer();
        const children = container.querySelector('[mapboxgl-children]');
        children === null || children === void 0 ? void 0 : children.remove();
        Mapbox.savedMaps.push(this);
    }
    destroy() {
        this._map.remove();
    }
    // Force redraw the map now. Typically resize() and jumpTo() is reflected in the next
    // render cycle, which is managed by Mapbox's animation loop.
    // This removes the synchronization issue caused by requestAnimationFrame.
    redraw() {
        const map = this._map;
        // map._render will throw error if style does not exist
        // https://github.com/mapbox/mapbox-gl-js/blob/fb9fc316da14e99ff4368f3e4faa3888fb43c513
        //   /src/ui/map.js#L1834
        if (!this._inRender && map.style) {
            // cancel the scheduled update
            if (map._frame) {
                map._frame.cancel();
                map._frame = null;
            }
            // the order is important - render() may schedule another update
            map._render();
        }
    }
    _createShadowTransform(map) {
        const renderTransform = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$map$2d$gl$2f$dist$2f$esm$2f$utils$2f$transform$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cloneTransform"])(map.transform);
        map.painter.transform = renderTransform;
        this._renderTransform = renderTransform;
    }
    /* Trigger map resize if size is controlled
       @param {object} nextProps
       @returns {bool} true if size has changed
     */ _updateSize(nextProps) {
        // Check if size is controlled
        const { viewState } = nextProps;
        if (viewState) {
            const map = this._map;
            if (viewState.width !== map.transform.width || viewState.height !== map.transform.height) {
                map.resize();
                return true;
            }
        }
        return false;
    }
    // Adapted from map.jumpTo
    /* Update camera to match props
       @param {object} nextProps
       @param {bool} triggerEvents - should fire camera events
       @returns {bool} true if anything is changed
     */ _updateViewState(nextProps, triggerEvents) {
        if (this._internalUpdate) {
            return false;
        }
        const map = this._map;
        const tr = this._renderTransform;
        // Take a snapshot of the transform before mutation
        const { zoom, pitch, bearing } = tr;
        const isMoving = map.isMoving();
        if (isMoving) {
            // All movement of the camera is done relative to the sea level
            tr.cameraElevationReference = 'sea';
        }
        const changed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$map$2d$gl$2f$dist$2f$esm$2f$utils$2f$transform$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["applyViewStateToTransform"])(tr, {
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$map$2d$gl$2f$dist$2f$esm$2f$utils$2f$transform$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformToViewState"])(map.transform),
            ...nextProps
        });
        if (isMoving) {
            // Reset camera reference
            tr.cameraElevationReference = 'ground';
        }
        if (changed && triggerEvents) {
            const deferredEvents = this._deferredEvents;
            // Delay DOM control updates to the next render cycle
            deferredEvents.move = true;
            deferredEvents.zoom || (deferredEvents.zoom = zoom !== tr.zoom);
            deferredEvents.rotate || (deferredEvents.rotate = bearing !== tr.bearing);
            deferredEvents.pitch || (deferredEvents.pitch = pitch !== tr.pitch);
        }
        // Avoid manipulating the real transform when interaction/animation is ongoing
        // as it would interfere with Mapbox's handlers
        if (!isMoving) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$map$2d$gl$2f$dist$2f$esm$2f$utils$2f$transform$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["applyViewStateToTransform"])(map.transform, nextProps);
        }
        return changed;
    }
    /* Update camera constraints and projection settings to match props
       @param {object} nextProps
       @param {object} currProps
       @returns {bool} true if anything is changed
     */ _updateSettings(nextProps, currProps) {
        const map = this._map;
        let changed = false;
        for (const propName of settingNames){
            if (propName in nextProps && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$map$2d$gl$2f$dist$2f$esm$2f$utils$2f$deep$2d$equal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deepEqual"])(nextProps[propName], currProps[propName])) {
                changed = true;
                const setter = map[`set${propName[0].toUpperCase()}${propName.slice(1)}`];
                setter === null || setter === void 0 ? void 0 : setter.call(map, nextProps[propName]);
            }
        }
        return changed;
    }
    /* Update map style to match props
       @param {object} nextProps
       @param {object} currProps
       @returns {bool} true if style is changed
     */ _updateStyle(nextProps, currProps) {
        if (nextProps.cursor !== currProps.cursor) {
            this._map.getCanvas().style.cursor = nextProps.cursor || '';
        }
        if (nextProps.mapStyle !== currProps.mapStyle) {
            const { mapStyle = DEFAULT_STYLE, styleDiffing = true } = nextProps;
            const options = {
                diff: styleDiffing
            };
            if ('localIdeographFontFamily' in nextProps) {
                // @ts-ignore Mapbox specific prop
                options.localIdeographFontFamily = nextProps.localIdeographFontFamily;
            }
            this._map.setStyle((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$map$2d$gl$2f$dist$2f$esm$2f$utils$2f$style$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeStyle"])(mapStyle), options);
            return true;
        }
        return false;
    }
    /* Update fog, light and terrain to match props
       @param {object} nextProps
       @param {object} currProps
       @returns {bool} true if anything is changed
     */ _updateStyleComponents(nextProps, currProps) {
        const map = this._map;
        let changed = false;
        if (map.isStyleLoaded()) {
            if ('light' in nextProps && map.setLight && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$map$2d$gl$2f$dist$2f$esm$2f$utils$2f$deep$2d$equal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deepEqual"])(nextProps.light, currProps.light)) {
                changed = true;
                map.setLight(nextProps.light);
            }
            if ('fog' in nextProps && map.setFog && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$map$2d$gl$2f$dist$2f$esm$2f$utils$2f$deep$2d$equal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deepEqual"])(nextProps.fog, currProps.fog)) {
                changed = true;
                map.setFog(nextProps.fog);
            }
            if ('terrain' in nextProps && map.setTerrain && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$map$2d$gl$2f$dist$2f$esm$2f$utils$2f$deep$2d$equal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deepEqual"])(nextProps.terrain, currProps.terrain)) {
                if (!nextProps.terrain || map.getSource(nextProps.terrain.source)) {
                    changed = true;
                    map.setTerrain(nextProps.terrain);
                }
            }
        }
        return changed;
    }
    /* Update interaction handlers to match props
       @param {object} nextProps
       @param {object} currProps
       @returns {bool} true if anything is changed
     */ _updateHandlers(nextProps, currProps) {
        var _a, _b;
        const map = this._map;
        let changed = false;
        for (const propName of handlerNames){
            const newValue = (_a = nextProps[propName]) !== null && _a !== void 0 ? _a : true;
            const oldValue = (_b = currProps[propName]) !== null && _b !== void 0 ? _b : true;
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$map$2d$gl$2f$dist$2f$esm$2f$utils$2f$deep$2d$equal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deepEqual"])(newValue, oldValue)) {
                changed = true;
                if (newValue) {
                    map[propName].enable(newValue);
                } else {
                    map[propName].disable();
                }
            }
        }
        return changed;
    }
    _queryRenderedFeatures(point) {
        const map = this._map;
        const tr = map.transform;
        const { interactiveLayerIds = [] } = this.props;
        try {
            map.transform = this._renderTransform;
            return map.queryRenderedFeatures(point, {
                layers: interactiveLayerIds.filter(map.getLayer.bind(map))
            });
        } catch (_a) {
            // May fail if style is not loaded
            return [];
        } finally{
            map.transform = tr;
        }
    }
    _updateHover(e) {
        var _a;
        const { props } = this;
        const shouldTrackHoveredFeatures = props.interactiveLayerIds && (props.onMouseMove || props.onMouseEnter || props.onMouseLeave);
        if (shouldTrackHoveredFeatures) {
            const eventType = e.type;
            const wasHovering = ((_a = this._hoveredFeatures) === null || _a === void 0 ? void 0 : _a.length) > 0;
            const features = this._queryRenderedFeatures(e.point);
            const isHovering = features.length > 0;
            if (!isHovering && wasHovering) {
                e.type = 'mouseleave';
                this._onPointerEvent(e);
            }
            this._hoveredFeatures = features;
            if (isHovering && !wasHovering) {
                e.type = 'mouseenter';
                this._onPointerEvent(e);
            }
            e.type = eventType;
        } else {
            this._hoveredFeatures = null;
        }
    }
    _fireEvent(baseFire, event, properties) {
        const map = this._map;
        const tr = map.transform;
        const eventType = typeof event === 'string' ? event : event.type;
        if (eventType === 'move') {
            this._updateViewState(this.props, false);
        }
        if (eventType in cameraEvents) {
            if (typeof event === 'object') {
                event.viewState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$map$2d$gl$2f$dist$2f$esm$2f$utils$2f$transform$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformToViewState"])(tr);
            }
            if (this._map.isMoving()) {
                // Replace map.transform with ours during the callbacks
                map.transform = this._renderTransform;
                baseFire.call(map, event, properties);
                map.transform = tr;
                return map;
            }
        }
        baseFire.call(map, event, properties);
        return map;
    }
    // All camera manipulations are complete, ready to repaint
    _onBeforeRepaint() {
        const map = this._map;
        // If there are camera changes driven by props, invoke camera events so that DOM controls are synced
        this._internalUpdate = true;
        for(const eventType in this._deferredEvents){
            if (this._deferredEvents[eventType]) {
                map.fire(eventType);
            }
        }
        this._internalUpdate = false;
        const tr = this._map.transform;
        // Make sure camera matches the current props
        map.transform = this._renderTransform;
        this._onAfterRepaint = ()=>{
            // Mapbox transitions between non-mercator projection and mercator during render time
            // Copy it back to the other
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$map$2d$gl$2f$dist$2f$esm$2f$utils$2f$transform$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["syncProjection"])(this._renderTransform, tr);
            // Restores camera state before render/load events are fired
            map.transform = tr;
        };
    }
}
Mapbox.savedMaps = [];
/**
 * Access token can be provided via one of:
 *   mapboxAccessToken prop
 *   access_token query parameter
 *   MapboxAccessToken environment variable
 *   REACT_APP_MAPBOX_ACCESS_TOKEN environment variable
 * @returns access token
 */ function getAccessTokenFromEnv() {
    let accessToken = null;
    /* global location, process */ if (typeof location !== 'undefined') {
        const match = /access_token=([^&\/]*)/.exec(location.search);
        accessToken = match && match[1];
    }
    // Note: This depends on bundler plugins (e.g. webpack) importing environment correctly
    try {
        accessToken = accessToken || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.MapboxAccessToken;
    } catch (_a) {
    // ignore
    }
    try {
        accessToken = accessToken || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.REACT_APP_MAPBOX_ACCESS_TOKEN;
    } catch (_b) {
    // ignore
    }
    return accessToken;
} //# sourceMappingURL=mapbox.js.map
}}),
"[project]/node_modules/react-map-gl/dist/esm/mapbox/create-ref.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: require } = __turbopack_context__;
{
/** These methods may break the react binding if called directly */ __turbopack_esm__({
    "default": (()=>createRef)
});
const skipMethods = [
    'setMaxBounds',
    'setMinZoom',
    'setMaxZoom',
    'setMinPitch',
    'setMaxPitch',
    'setRenderWorldCopies',
    'setProjection',
    'setStyle',
    'addSource',
    'removeSource',
    'addLayer',
    'removeLayer',
    'setLayerZoomRange',
    'setFilter',
    'setPaintProperty',
    'setLayoutProperty',
    'setLight',
    'setTerrain',
    'setFog',
    'remove'
];
function createRef(mapInstance) {
    if (!mapInstance) {
        return null;
    }
    const map = mapInstance.map;
    const result = {
        getMap: ()=>map,
        // Overwrite getters to use our shadow transform
        getCenter: ()=>mapInstance.transform.center,
        getZoom: ()=>mapInstance.transform.zoom,
        getBearing: ()=>mapInstance.transform.bearing,
        getPitch: ()=>mapInstance.transform.pitch,
        getPadding: ()=>mapInstance.transform.padding,
        getBounds: ()=>mapInstance.transform.getBounds(),
        project: (lnglat)=>{
            const tr = map.transform;
            map.transform = mapInstance.transform;
            const result = map.project(lnglat);
            map.transform = tr;
            return result;
        },
        unproject: (point)=>{
            const tr = map.transform;
            map.transform = mapInstance.transform;
            const result = map.unproject(point);
            map.transform = tr;
            return result;
        },
        // options diverge between mapbox and maplibre
        queryTerrainElevation: (lnglat, options)=>{
            const tr = map.transform;
            map.transform = mapInstance.transform;
            const result = map.queryTerrainElevation(lnglat, options);
            map.transform = tr;
            return result;
        },
        queryRenderedFeatures: (geometry, options)=>{
            const tr = map.transform;
            map.transform = mapInstance.transform;
            const result = map.queryRenderedFeatures(geometry, options);
            map.transform = tr;
            return result;
        }
    };
    for (const key of getMethodNames(map)){
        // @ts-expect-error
        if (!(key in result) && !skipMethods.includes(key)) {
            result[key] = map[key].bind(map);
        }
    }
    return result;
}
function getMethodNames(obj) {
    const result = new Set();
    let proto = obj;
    while(proto){
        for (const key of Object.getOwnPropertyNames(proto)){
            if (key[0] !== '_' && typeof obj[key] === 'function' && key !== 'fire' && key !== 'setEventedParent') {
                result.add(key);
            }
        }
        proto = Object.getPrototypeOf(proto);
    }
    return Array.from(result);
} //# sourceMappingURL=create-ref.js.map
}}),
"[project]/node_modules/react-map-gl/dist/esm/utils/use-isomorphic-layout-effect.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: require } = __turbopack_context__;
{
// From https://github.com/streamich/react-use/blob/master/src/useIsomorphicLayoutEffect.ts
// useLayoutEffect but does not trigger warning in server-side rendering
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
const useIsomorphicLayoutEffect = typeof document !== 'undefined' ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"];
const __TURBOPACK__default__export__ = useIsomorphicLayoutEffect;
 //# sourceMappingURL=use-isomorphic-layout-effect.js.map
}}),
"[project]/node_modules/react-map-gl/dist/esm/utils/set-globals.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>setGlobals)
});
const globalSettings = [
    'baseApiUrl',
    'maxParallelImageRequests',
    'workerClass',
    'workerCount',
    'workerUrl'
];
function setGlobals(mapLib, props) {
    for (const key of globalSettings){
        if (key in props) {
            mapLib[key] = props[key];
        }
    }
    const { RTLTextPlugin = 'https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-rtl-text/v0.2.3/mapbox-gl-rtl-text.js' } = props;
    if (RTLTextPlugin && mapLib.getRTLTextPluginStatus && mapLib.getRTLTextPluginStatus() === 'unavailable') {
        mapLib.setRTLTextPlugin(RTLTextPlugin, (error)=>{
            if (error) {
                // eslint-disable-next-line
                console.error(error);
            }
        }, true);
    }
} //# sourceMappingURL=set-globals.js.map
}}),
"[project]/node_modules/react-map-gl/dist/esm/components/map.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "MapContext": (()=>MapContext),
    "default": (()=>Map)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$map$2d$gl$2f$dist$2f$esm$2f$components$2f$use$2d$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-map-gl/dist/esm/components/use-map.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$map$2d$gl$2f$dist$2f$esm$2f$mapbox$2f$mapbox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-map-gl/dist/esm/mapbox/mapbox.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$map$2d$gl$2f$dist$2f$esm$2f$mapbox$2f$create$2d$ref$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-map-gl/dist/esm/mapbox/create-ref.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$map$2d$gl$2f$dist$2f$esm$2f$utils$2f$use$2d$isomorphic$2d$layout$2d$effect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-map-gl/dist/esm/utils/use-isomorphic-layout-effect.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$map$2d$gl$2f$dist$2f$esm$2f$utils$2f$set$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-map-gl/dist/esm/utils/set-globals.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
const MapContext = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createContext(null);
function Map(props, ref, defaultLib) {
    const mountedMapsContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$map$2d$gl$2f$dist$2f$esm$2f$components$2f$use$2d$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MountedMapsContext"]);
    const [mapInstance, setMapInstance] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])();
    const { current: contextValue } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        mapLib: null,
        map: null
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Map.useEffect": ()=>{
            const mapLib = props.mapLib;
            let isMounted = true;
            let mapbox;
            Promise.resolve(mapLib || defaultLib).then({
                "Map.useEffect": (module)=>{
                    if (!isMounted) {
                        return;
                    }
                    if (!module) {
                        throw new Error('Invalid mapLib');
                    }
                    const mapboxgl = 'Map' in module ? module : module.default;
                    if (!mapboxgl.Map) {
                        throw new Error('Invalid mapLib');
                    }
                    // workerUrl & workerClass may change the result of supported()
                    // https://github.com/visgl/react-map-gl/discussions/2027
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$map$2d$gl$2f$dist$2f$esm$2f$utils$2f$set$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(mapboxgl, props);
                    if (!mapboxgl.supported || mapboxgl.supported(props)) {
                        if (props.reuseMaps) {
                            mapbox = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$map$2d$gl$2f$dist$2f$esm$2f$mapbox$2f$mapbox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].reuse(props, containerRef.current);
                        }
                        if (!mapbox) {
                            mapbox = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$map$2d$gl$2f$dist$2f$esm$2f$mapbox$2f$mapbox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](mapboxgl.Map, props, containerRef.current);
                        }
                        contextValue.map = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$map$2d$gl$2f$dist$2f$esm$2f$mapbox$2f$create$2d$ref$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(mapbox);
                        contextValue.mapLib = mapboxgl;
                        setMapInstance(mapbox);
                        mountedMapsContext === null || mountedMapsContext === void 0 ? void 0 : mountedMapsContext.onMapMount(contextValue.map, props.id);
                    } else {
                        throw new Error('Map is not supported by this browser');
                    }
                }
            }["Map.useEffect"]).catch({
                "Map.useEffect": (error)=>{
                    const { onError } = props;
                    if (onError) {
                        onError({
                            type: 'error',
                            target: null,
                            originalEvent: null,
                            error
                        });
                    } else {
                        console.error(error); // eslint-disable-line
                    }
                }
            }["Map.useEffect"]);
            return ({
                "Map.useEffect": ()=>{
                    isMounted = false;
                    if (mapbox) {
                        mountedMapsContext === null || mountedMapsContext === void 0 ? void 0 : mountedMapsContext.onMapUnmount(props.id);
                        if (props.reuseMaps) {
                            mapbox.recycle();
                        } else {
                            mapbox.destroy();
                        }
                    }
                }
            })["Map.useEffect"];
        }
    }["Map.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$map$2d$gl$2f$dist$2f$esm$2f$utils$2f$use$2d$isomorphic$2d$layout$2d$effect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        "Map.useIsomorphicLayoutEffect": ()=>{
            if (mapInstance) {
                mapInstance.setProps(props);
            }
        }
    }["Map.useIsomorphicLayoutEffect"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useImperativeHandle"])(ref, {
        "Map.useImperativeHandle": ()=>contextValue.map
    }["Map.useImperativeHandle"], [
        mapInstance
    ]);
    const style = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Map.useMemo[style]": ()=>({
                position: 'relative',
                width: '100%',
                height: '100%',
                ...props.style
            })
    }["Map.useMemo[style]"], [
        props.style
    ]);
    const CHILD_CONTAINER_STYLE = {
        height: '100%'
    };
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement("div", {
        id: props.id,
        ref: containerRef,
        style: style
    }, mapInstance && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement(MapContext.Provider, {
        value: contextValue
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement("div", {
        "mapboxgl-children": "",
        style: CHILD_CONTAINER_STYLE
    }, props.children)));
} //# sourceMappingURL=map.js.map
}}),
"[project]/node_modules/react-map-gl/dist/esm/utils/apply-react-style.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: require } = __turbopack_context__;
{
// This is a simplified version of
// https://github.com/facebook/react/blob/4131af3e4bf52f3a003537ec95a1655147c81270/src/renderers/dom/shared/CSSPropertyOperations.js#L62
__turbopack_esm__({
    "applyReactStyle": (()=>applyReactStyle)
});
const unitlessNumber = /box|flex|grid|column|lineHeight|fontWeight|opacity|order|tabSize|zIndex/;
function applyReactStyle(element, styles) {
    if (!element || !styles) {
        return;
    }
    const style = element.style;
    for(const key in styles){
        const value = styles[key];
        if (Number.isFinite(value) && !unitlessNumber.test(key)) {
            style[key] = `${value}px`;
        } else {
            style[key] = value;
        }
    }
} //# sourceMappingURL=apply-react-style.js.map
}}),
"[project]/node_modules/react-map-gl/dist/esm/components/marker.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: require } = __turbopack_context__;
{
/* global document */ __turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$map$2d$gl$2f$dist$2f$esm$2f$utils$2f$apply$2d$react$2d$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-map-gl/dist/esm/utils/apply-react-style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$map$2d$gl$2f$dist$2f$esm$2f$components$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-map-gl/dist/esm/components/map.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$map$2d$gl$2f$dist$2f$esm$2f$utils$2f$deep$2d$equal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-map-gl/dist/esm/utils/deep-equal.js [app-client] (ecmascript)");
;
;
;
;
;
;
/* eslint-disable complexity,max-statements */ function Marker(props, ref) {
    const { map, mapLib } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$map$2d$gl$2f$dist$2f$esm$2f$components$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MapContext"]);
    const thisRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        props
    });
    thisRef.current.props = props;
    const marker = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Marker.useMemo[marker]": ()=>{
            let hasChildren = false;
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Children.forEach(props.children, {
                "Marker.useMemo[marker]": (el)=>{
                    if (el) {
                        hasChildren = true;
                    }
                }
            }["Marker.useMemo[marker]"]);
            const options = {
                ...props,
                element: hasChildren ? document.createElement('div') : null
            };
            const mk = new mapLib.Marker(options);
            mk.setLngLat([
                props.longitude,
                props.latitude
            ]);
            mk.getElement().addEventListener('click', {
                "Marker.useMemo[marker]": (e)=>{
                    var _a, _b;
                    (_b = (_a = thisRef.current.props).onClick) === null || _b === void 0 ? void 0 : _b.call(_a, {
                        type: 'click',
                        target: mk,
                        originalEvent: e
                    });
                }
            }["Marker.useMemo[marker]"]);
            mk.on('dragstart', {
                "Marker.useMemo[marker]": (e)=>{
                    var _a, _b;
                    const evt = e;
                    evt.lngLat = marker.getLngLat();
                    (_b = (_a = thisRef.current.props).onDragStart) === null || _b === void 0 ? void 0 : _b.call(_a, evt);
                }
            }["Marker.useMemo[marker]"]);
            mk.on('drag', {
                "Marker.useMemo[marker]": (e)=>{
                    var _a, _b;
                    const evt = e;
                    evt.lngLat = marker.getLngLat();
                    (_b = (_a = thisRef.current.props).onDrag) === null || _b === void 0 ? void 0 : _b.call(_a, evt);
                }
            }["Marker.useMemo[marker]"]);
            mk.on('dragend', {
                "Marker.useMemo[marker]": (e)=>{
                    var _a, _b;
                    const evt = e;
                    evt.lngLat = marker.getLngLat();
                    (_b = (_a = thisRef.current.props).onDragEnd) === null || _b === void 0 ? void 0 : _b.call(_a, evt);
                }
            }["Marker.useMemo[marker]"]);
            return mk;
        }
    }["Marker.useMemo[marker]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Marker.useEffect": ()=>{
            marker.addTo(map.getMap());
            return ({
                "Marker.useEffect": ()=>{
                    marker.remove();
                }
            })["Marker.useEffect"];
        }
    }["Marker.useEffect"], []);
    const { longitude, latitude, offset, style, draggable = false, popup = null, rotation = 0, rotationAlignment = 'auto', pitchAlignment = 'auto' } = props;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Marker.useEffect": ()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$map$2d$gl$2f$dist$2f$esm$2f$utils$2f$apply$2d$react$2d$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["applyReactStyle"])(marker.getElement(), style);
        }
    }["Marker.useEffect"], [
        style
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useImperativeHandle"])(ref, {
        "Marker.useImperativeHandle": ()=>marker
    }["Marker.useImperativeHandle"], []);
    if (marker.getLngLat().lng !== longitude || marker.getLngLat().lat !== latitude) {
        marker.setLngLat([
            longitude,
            latitude
        ]);
    }
    if (offset && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$map$2d$gl$2f$dist$2f$esm$2f$utils$2f$deep$2d$equal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["arePointsEqual"])(marker.getOffset(), offset)) {
        marker.setOffset(offset);
    }
    if (marker.isDraggable() !== draggable) {
        marker.setDraggable(draggable);
    }
    if (marker.getRotation() !== rotation) {
        marker.setRotation(rotation);
    }
    if (marker.getRotationAlignment() !== rotationAlignment) {
        marker.setRotationAlignment(rotationAlignment);
    }
    if (marker.getPitchAlignment() !== pitchAlignment) {
        marker.setPitchAlignment(pitchAlignment);
    }
    if (marker.getPopup() !== popup) {
        marker.setPopup(popup);
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPortal"])(props.children, marker.getElement());
}
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(Marker));
 //# sourceMappingURL=marker.js.map
}}),
"[project]/node_modules/react-map-gl/dist/esm/components/popup.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$map$2d$gl$2f$dist$2f$esm$2f$utils$2f$apply$2d$react$2d$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-map-gl/dist/esm/utils/apply-react-style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$map$2d$gl$2f$dist$2f$esm$2f$components$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-map-gl/dist/esm/components/map.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$map$2d$gl$2f$dist$2f$esm$2f$utils$2f$deep$2d$equal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-map-gl/dist/esm/utils/deep-equal.js [app-client] (ecmascript)");
;
;
;
;
;
// Adapted from https://github.com/mapbox/mapbox-gl-js/blob/v1.13.0/src/ui/popup.js
function getClassList(className) {
    return new Set(className ? className.trim().split(/\s+/) : []);
}
/* eslint-disable complexity,max-statements */ function Popup(props, ref) {
    const { map, mapLib } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$map$2d$gl$2f$dist$2f$esm$2f$components$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MapContext"]);
    const container = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Popup.useMemo[container]": ()=>{
            return document.createElement('div');
        }
    }["Popup.useMemo[container]"], []);
    const thisRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        props
    });
    thisRef.current.props = props;
    const popup = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Popup.useMemo[popup]": ()=>{
            const options = {
                ...props
            };
            const pp = new mapLib.Popup(options);
            pp.setLngLat([
                props.longitude,
                props.latitude
            ]);
            pp.once('open', {
                "Popup.useMemo[popup]": (e)=>{
                    var _a, _b;
                    (_b = (_a = thisRef.current.props).onOpen) === null || _b === void 0 ? void 0 : _b.call(_a, e);
                }
            }["Popup.useMemo[popup]"]);
            return pp;
        }
    }["Popup.useMemo[popup]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Popup.useEffect": ()=>{
            const onClose = {
                "Popup.useEffect.onClose": (e)=>{
                    var _a, _b;
                    (_b = (_a = thisRef.current.props).onClose) === null || _b === void 0 ? void 0 : _b.call(_a, e);
                }
            }["Popup.useEffect.onClose"];
            popup.on('close', onClose);
            popup.setDOMContent(container).addTo(map.getMap());
            return ({
                "Popup.useEffect": ()=>{
                    // https://github.com/visgl/react-map-gl/issues/1825
                    // onClose should not be fired if the popup is removed by unmounting
                    // When using React strict mode, the component is mounted twice.
                    // Firing the onClose callback here would be a false signal to remove the component.
                    popup.off('close', onClose);
                    if (popup.isOpen()) {
                        popup.remove();
                    }
                }
            })["Popup.useEffect"];
        }
    }["Popup.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Popup.useEffect": ()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$map$2d$gl$2f$dist$2f$esm$2f$utils$2f$apply$2d$react$2d$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["applyReactStyle"])(popup.getElement(), props.style);
        }
    }["Popup.useEffect"], [
        props.style
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useImperativeHandle"])(ref, {
        "Popup.useImperativeHandle": ()=>popup
    }["Popup.useImperativeHandle"], []);
    if (popup.isOpen()) {
        if (popup.getLngLat().lng !== props.longitude || popup.getLngLat().lat !== props.latitude) {
            popup.setLngLat([
                props.longitude,
                props.latitude
            ]);
        }
        if (props.offset && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$map$2d$gl$2f$dist$2f$esm$2f$utils$2f$deep$2d$equal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deepEqual"])(popup.options.offset, props.offset)) {
            popup.setOffset(props.offset);
        }
        if (popup.options.anchor !== props.anchor || popup.options.maxWidth !== props.maxWidth) {
            popup.options.anchor = props.anchor;
            popup.setMaxWidth(props.maxWidth);
        }
        if (popup.options.className !== props.className) {
            const prevClassList = getClassList(popup.options.className);
            const nextClassList = getClassList(props.className);
            for (const c of prevClassList){
                if (!nextClassList.has(c)) {
                    popup.removeClassName(c);
                }
            }
            for (const c of nextClassList){
                if (!prevClassList.has(c)) {
                    popup.addClassName(c);
                }
            }
            popup.options.className = props.className;
        }
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPortal"])(props.children, container);
}
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(Popup));
 //# sourceMappingURL=popup.js.map
}}),
"[project]/node_modules/react-map-gl/dist/esm/components/use-control.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$map$2d$gl$2f$dist$2f$esm$2f$components$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-map-gl/dist/esm/components/map.js [app-client] (ecmascript)");
;
;
function useControl(onCreate, arg1, arg2, arg3) {
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$map$2d$gl$2f$dist$2f$esm$2f$components$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MapContext"]);
    const ctrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useControl.useMemo[ctrl]": ()=>onCreate(context)
    }["useControl.useMemo[ctrl]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useControl.useEffect": ()=>{
            const opts = arg3 || arg2 || arg1;
            const onAdd = typeof arg1 === 'function' && typeof arg2 === 'function' ? arg1 : null;
            const onRemove = typeof arg2 === 'function' ? arg2 : typeof arg1 === 'function' ? arg1 : null;
            const { map } = context;
            if (!map.hasControl(ctrl)) {
                map.addControl(ctrl, opts === null || opts === void 0 ? void 0 : opts.position);
                if (onAdd) {
                    onAdd(context);
                }
            }
            return ({
                "useControl.useEffect": ()=>{
                    if (onRemove) {
                        onRemove(context);
                    }
                    // Map might have been removed (parent effects are destroyed before child ones)
                    if (map.hasControl(ctrl)) {
                        map.removeControl(ctrl);
                    }
                }
            })["useControl.useEffect"];
        }
    }["useControl.useEffect"], []);
    return ctrl;
}
const __TURBOPACK__default__export__ = useControl;
 //# sourceMappingURL=use-control.js.map
}}),
"[project]/node_modules/react-map-gl/dist/esm/components/attribution-control.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$map$2d$gl$2f$dist$2f$esm$2f$utils$2f$apply$2d$react$2d$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-map-gl/dist/esm/utils/apply-react-style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$map$2d$gl$2f$dist$2f$esm$2f$components$2f$use$2d$control$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-map-gl/dist/esm/components/use-control.js [app-client] (ecmascript)");
;
;
;
function AttributionControl(props) {
    const ctrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$map$2d$gl$2f$dist$2f$esm$2f$components$2f$use$2d$control$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        "AttributionControl.useControl[ctrl]": ({ mapLib })=>new mapLib.AttributionControl(props)
    }["AttributionControl.useControl[ctrl]"], {
        position: props.position
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AttributionControl.useEffect": ()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$map$2d$gl$2f$dist$2f$esm$2f$utils$2f$apply$2d$react$2d$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["applyReactStyle"])(ctrl._container, props.style);
        }
    }["AttributionControl.useEffect"], [
        props.style
    ]);
    return null;
}
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])(AttributionControl);
 //# sourceMappingURL=attribution-control.js.map
}}),
"[project]/node_modules/react-map-gl/dist/esm/components/fullscreen-control.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$map$2d$gl$2f$dist$2f$esm$2f$utils$2f$apply$2d$react$2d$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-map-gl/dist/esm/utils/apply-react-style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$map$2d$gl$2f$dist$2f$esm$2f$components$2f$use$2d$control$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-map-gl/dist/esm/components/use-control.js [app-client] (ecmascript)");
;
;
;
function FullscreenControl(props) {
    const ctrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$map$2d$gl$2f$dist$2f$esm$2f$components$2f$use$2d$control$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        "FullscreenControl.useControl[ctrl]": ({ mapLib })=>new mapLib.FullscreenControl({
                container: props.containerId && document.getElementById(props.containerId)
            })
    }["FullscreenControl.useControl[ctrl]"], {
        position: props.position
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FullscreenControl.useEffect": ()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$map$2d$gl$2f$dist$2f$esm$2f$utils$2f$apply$2d$react$2d$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["applyReactStyle"])(ctrl._controlContainer, props.style);
        }
    }["FullscreenControl.useEffect"], [
        props.style
    ]);
    return null;
}
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])(FullscreenControl);
 //# sourceMappingURL=fullscreen-control.js.map
}}),
"[project]/node_modules/react-map-gl/dist/esm/components/geolocate-control.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$map$2d$gl$2f$dist$2f$esm$2f$utils$2f$apply$2d$react$2d$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-map-gl/dist/esm/utils/apply-react-style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$map$2d$gl$2f$dist$2f$esm$2f$components$2f$use$2d$control$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-map-gl/dist/esm/components/use-control.js [app-client] (ecmascript)");
;
;
;
function GeolocateControl(props, ref) {
    const thisRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        props
    });
    const ctrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$map$2d$gl$2f$dist$2f$esm$2f$components$2f$use$2d$control$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        "GeolocateControl.useControl[ctrl]": ({ mapLib })=>{
            const gc = new mapLib.GeolocateControl(props);
            // Hack: fix GeolocateControl reuse
            // When using React strict mode, the component is mounted twice.
            // GeolocateControl's UI creation is asynchronous. Removing and adding it back causes the UI to be initialized twice.
            // @ts-expect-error private method
            const setupUI = gc._setupUI;
            // @ts-expect-error private method
            gc._setupUI = ({
                "GeolocateControl.useControl[ctrl]": (args)=>{
                    if (!gc._container.hasChildNodes()) {
                        setupUI(args);
                    }
                }
            })["GeolocateControl.useControl[ctrl]"];
            gc.on('geolocate', {
                "GeolocateControl.useControl[ctrl]": (e)=>{
                    var _a, _b;
                    (_b = (_a = thisRef.current.props).onGeolocate) === null || _b === void 0 ? void 0 : _b.call(_a, e);
                }
            }["GeolocateControl.useControl[ctrl]"]);
            gc.on('error', {
                "GeolocateControl.useControl[ctrl]": (e)=>{
                    var _a, _b;
                    (_b = (_a = thisRef.current.props).onError) === null || _b === void 0 ? void 0 : _b.call(_a, e);
                }
            }["GeolocateControl.useControl[ctrl]"]);
            gc.on('outofmaxbounds', {
                "GeolocateControl.useControl[ctrl]": (e)=>{
                    var _a, _b;
                    (_b = (_a = thisRef.current.props).onOutOfMaxBounds) === null || _b === void 0 ? void 0 : _b.call(_a, e);
                }
            }["GeolocateControl.useControl[ctrl]"]);
            gc.on('trackuserlocationstart', {
                "GeolocateControl.useControl[ctrl]": (e)=>{
                    var _a, _b;
                    (_b = (_a = thisRef.current.props).onTrackUserLocationStart) === null || _b === void 0 ? void 0 : _b.call(_a, e);
                }
            }["GeolocateControl.useControl[ctrl]"]);
            gc.on('trackuserlocationend', {
                "GeolocateControl.useControl[ctrl]": (e)=>{
                    var _a, _b;
                    (_b = (_a = thisRef.current.props).onTrackUserLocationEnd) === null || _b === void 0 ? void 0 : _b.call(_a, e);
                }
            }["GeolocateControl.useControl[ctrl]"]);
            return gc;
        }
    }["GeolocateControl.useControl[ctrl]"], {
        position: props.position
    });
    thisRef.current.props = props;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useImperativeHandle"])(ref, {
        "GeolocateControl.useImperativeHandle": ()=>ctrl
    }["GeolocateControl.useImperativeHandle"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GeolocateControl.useEffect": ()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$map$2d$gl$2f$dist$2f$esm$2f$utils$2f$apply$2d$react$2d$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["applyReactStyle"])(ctrl._container, props.style);
        }
    }["GeolocateControl.useEffect"], [
        props.style
    ]);
    return null;
}
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(GeolocateControl));
 //# sourceMappingURL=geolocate-control.js.map
}}),
"[project]/node_modules/react-map-gl/dist/esm/components/navigation-control.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$map$2d$gl$2f$dist$2f$esm$2f$utils$2f$apply$2d$react$2d$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-map-gl/dist/esm/utils/apply-react-style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$map$2d$gl$2f$dist$2f$esm$2f$components$2f$use$2d$control$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-map-gl/dist/esm/components/use-control.js [app-client] (ecmascript)");
;
;
;
function NavigationControl(props) {
    const ctrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$map$2d$gl$2f$dist$2f$esm$2f$components$2f$use$2d$control$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        "NavigationControl.useControl[ctrl]": ({ mapLib })=>new mapLib.NavigationControl(props)
    }["NavigationControl.useControl[ctrl]"], {
        position: props.position
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NavigationControl.useEffect": ()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$map$2d$gl$2f$dist$2f$esm$2f$utils$2f$apply$2d$react$2d$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["applyReactStyle"])(ctrl._container, props.style);
        }
    }["NavigationControl.useEffect"], [
        props.style
    ]);
    return null;
}
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])(NavigationControl);
 //# sourceMappingURL=navigation-control.js.map
}}),
"[project]/node_modules/react-map-gl/dist/esm/components/scale-control.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$map$2d$gl$2f$dist$2f$esm$2f$utils$2f$apply$2d$react$2d$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-map-gl/dist/esm/utils/apply-react-style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$map$2d$gl$2f$dist$2f$esm$2f$components$2f$use$2d$control$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-map-gl/dist/esm/components/use-control.js [app-client] (ecmascript)");
;
;
;
function ScaleControl(props) {
    const ctrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$map$2d$gl$2f$dist$2f$esm$2f$components$2f$use$2d$control$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        "ScaleControl.useControl[ctrl]": ({ mapLib })=>new mapLib.ScaleControl(props)
    }["ScaleControl.useControl[ctrl]"], {
        position: props.position
    });
    const propsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(props);
    const prevProps = propsRef.current;
    propsRef.current = props;
    const { style } = props;
    if (props.maxWidth !== undefined && props.maxWidth !== prevProps.maxWidth) {
        ctrl.options.maxWidth = props.maxWidth;
    }
    if (props.unit !== undefined && props.unit !== prevProps.unit) {
        ctrl.setUnit(props.unit);
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ScaleControl.useEffect": ()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$map$2d$gl$2f$dist$2f$esm$2f$utils$2f$apply$2d$react$2d$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["applyReactStyle"])(ctrl._container, style);
        }
    }["ScaleControl.useEffect"], [
        style
    ]);
    return null;
}
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])(ScaleControl);
 //# sourceMappingURL=scale-control.js.map
}}),
"[project]/node_modules/react-map-gl/dist/esm/utils/assert.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>assert)
});
function assert(condition, message) {
    if (!condition) {
        throw new Error(message);
    }
} //# sourceMappingURL=assert.js.map
}}),
"[project]/node_modules/react-map-gl/dist/esm/components/layer.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$map$2d$gl$2f$dist$2f$esm$2f$components$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-map-gl/dist/esm/components/map.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$map$2d$gl$2f$dist$2f$esm$2f$utils$2f$assert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-map-gl/dist/esm/utils/assert.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$map$2d$gl$2f$dist$2f$esm$2f$utils$2f$deep$2d$equal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-map-gl/dist/esm/utils/deep-equal.js [app-client] (ecmascript)");
;
;
;
;
/* eslint-disable complexity, max-statements */ function updateLayer(map, id, props, prevProps) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$map$2d$gl$2f$dist$2f$esm$2f$utils$2f$assert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(props.id === prevProps.id, 'layer id changed');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$map$2d$gl$2f$dist$2f$esm$2f$utils$2f$assert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(props.type === prevProps.type, 'layer type changed');
    if (props.type === 'custom' || prevProps.type === 'custom') {
        return;
    }
    const { layout = {}, paint = {}, filter, minzoom, maxzoom, beforeId } = props;
    if (beforeId !== prevProps.beforeId) {
        map.moveLayer(id, beforeId);
    }
    if (layout !== prevProps.layout) {
        const prevLayout = prevProps.layout || {};
        for(const key in layout){
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$map$2d$gl$2f$dist$2f$esm$2f$utils$2f$deep$2d$equal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deepEqual"])(layout[key], prevLayout[key])) {
                map.setLayoutProperty(id, key, layout[key]);
            }
        }
        for(const key in prevLayout){
            if (!layout.hasOwnProperty(key)) {
                map.setLayoutProperty(id, key, undefined);
            }
        }
    }
    if (paint !== prevProps.paint) {
        const prevPaint = prevProps.paint || {};
        for(const key in paint){
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$map$2d$gl$2f$dist$2f$esm$2f$utils$2f$deep$2d$equal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deepEqual"])(paint[key], prevPaint[key])) {
                map.setPaintProperty(id, key, paint[key]);
            }
        }
        for(const key in prevPaint){
            if (!paint.hasOwnProperty(key)) {
                map.setPaintProperty(id, key, undefined);
            }
        }
    }
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$map$2d$gl$2f$dist$2f$esm$2f$utils$2f$deep$2d$equal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deepEqual"])(filter, prevProps.filter)) {
        map.setFilter(id, filter);
    }
    if (minzoom !== prevProps.minzoom || maxzoom !== prevProps.maxzoom) {
        map.setLayerZoomRange(id, minzoom, maxzoom);
    }
}
function createLayer(map, id, props) {
    // @ts-ignore
    if (map.style && map.style._loaded && (!('source' in props) || map.getSource(props.source))) {
        const options = {
            ...props,
            id
        };
        delete options.beforeId;
        // @ts-ignore
        map.addLayer(options, props.beforeId);
    }
}
/* eslint-enable complexity, max-statements */ let layerCounter = 0;
function Layer(props) {
    const map = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$map$2d$gl$2f$dist$2f$esm$2f$components$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MapContext"]).map.getMap();
    const propsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(props);
    const [, setStyleLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Layer.useMemo[id]": ()=>props.id || `jsx-layer-${layerCounter++}`
    }["Layer.useMemo[id]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Layer.useEffect": ()=>{
            if (map) {
                const forceUpdate = {
                    "Layer.useEffect.forceUpdate": ()=>setStyleLoaded({
                            "Layer.useEffect.forceUpdate": (version)=>version + 1
                        }["Layer.useEffect.forceUpdate"])
                }["Layer.useEffect.forceUpdate"];
                map.on('styledata', forceUpdate);
                forceUpdate();
                return ({
                    "Layer.useEffect": ()=>{
                        map.off('styledata', forceUpdate);
                        // @ts-ignore
                        if (map.style && map.style._loaded && map.getLayer(id)) {
                            map.removeLayer(id);
                        }
                    }
                })["Layer.useEffect"];
            }
            return undefined;
        }
    }["Layer.useEffect"], [
        map
    ]);
    // @ts-ignore
    const layer = map && map.style && map.getLayer(id);
    if (layer) {
        try {
            updateLayer(map, id, props, propsRef.current);
        } catch (error) {
            console.warn(error); // eslint-disable-line
        }
    } else {
        createLayer(map, id, props);
    }
    // Store last rendered props
    propsRef.current = props;
    return null;
}
const __TURBOPACK__default__export__ = Layer;
 //# sourceMappingURL=layer.js.map
}}),
"[project]/node_modules/react-map-gl/dist/esm/components/source.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$map$2d$gl$2f$dist$2f$esm$2f$components$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-map-gl/dist/esm/components/map.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$map$2d$gl$2f$dist$2f$esm$2f$utils$2f$assert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-map-gl/dist/esm/utils/assert.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$map$2d$gl$2f$dist$2f$esm$2f$utils$2f$deep$2d$equal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-map-gl/dist/esm/utils/deep-equal.js [app-client] (ecmascript)");
;
;
;
;
;
;
let sourceCounter = 0;
function createSource(map, id, props) {
    // @ts-ignore
    if (map.style && map.style._loaded) {
        const options = {
            ...props
        };
        delete options.id;
        delete options.children;
        // @ts-ignore
        map.addSource(id, options);
        return map.getSource(id);
    }
    return null;
}
/* eslint-disable complexity */ function updateSource(source, props, prevProps) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$map$2d$gl$2f$dist$2f$esm$2f$utils$2f$assert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(props.id === prevProps.id, 'source id changed');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$map$2d$gl$2f$dist$2f$esm$2f$utils$2f$assert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(props.type === prevProps.type, 'source type changed');
    let changedKey = '';
    let changedKeyCount = 0;
    for(const key in props){
        if (key !== 'children' && key !== 'id' && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$map$2d$gl$2f$dist$2f$esm$2f$utils$2f$deep$2d$equal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deepEqual"])(prevProps[key], props[key])) {
            changedKey = key;
            changedKeyCount++;
        }
    }
    if (!changedKeyCount) {
        return;
    }
    const type = props.type;
    if (type === 'geojson') {
        source.setData(props.data);
    } else if (type === 'image') {
        source.updateImage({
            url: props.url,
            coordinates: props.coordinates
        });
    } else if ('setCoordinates' in source && changedKeyCount === 1 && changedKey === 'coordinates') {
        source.setCoordinates(props.coordinates);
    } else if ('setUrl' in source) {
        // Added in 1.12.0:
        // vectorTileSource.setTiles
        // vectorTileSource.setUrl
        switch(changedKey){
            case 'url':
                source.setUrl(props.url);
                break;
            case 'tiles':
                source.setTiles(props.tiles);
                break;
            default:
        }
    } else {
        // eslint-disable-next-line
        console.warn(`Unable to update <Source> prop: ${changedKey}`);
    }
}
/* eslint-enable complexity */ function Source(props) {
    const map = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$map$2d$gl$2f$dist$2f$esm$2f$components$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MapContext"]).map.getMap();
    const propsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(props);
    const [, setStyleLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Source.useMemo[id]": ()=>props.id || `jsx-source-${sourceCounter++}`
    }["Source.useMemo[id]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Source.useEffect": ()=>{
            if (map) {
                /* global setTimeout */ const forceUpdate = {
                    "Source.useEffect.forceUpdate": ()=>setTimeout({
                            "Source.useEffect.forceUpdate": ()=>setStyleLoaded({
                                    "Source.useEffect.forceUpdate": (version)=>version + 1
                                }["Source.useEffect.forceUpdate"])
                        }["Source.useEffect.forceUpdate"], 0)
                }["Source.useEffect.forceUpdate"];
                map.on('styledata', forceUpdate);
                forceUpdate();
                return ({
                    "Source.useEffect": ()=>{
                        var _a;
                        map.off('styledata', forceUpdate);
                        // @ts-ignore
                        if (map.style && map.style._loaded && map.getSource(id)) {
                            // Parent effects are destroyed before child ones, see
                            // https://github.com/facebook/react/issues/16728
                            // Source can only be removed after all child layers are removed
                            const allLayers = (_a = map.getStyle()) === null || _a === void 0 ? void 0 : _a.layers;
                            if (allLayers) {
                                for (const layer of allLayers){
                                    // @ts-ignore (2339) source does not exist on all layer types
                                    if (layer.source === id) {
                                        map.removeLayer(layer.id);
                                    }
                                }
                            }
                            map.removeSource(id);
                        }
                    }
                })["Source.useEffect"];
            }
            return undefined;
        }
    }["Source.useEffect"], [
        map
    ]);
    // @ts-ignore
    let source = map && map.style && map.getSource(id);
    if (source) {
        updateSource(source, props, propsRef.current);
    } else {
        source = createSource(map, id, props);
    }
    propsRef.current = props;
    return source && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Children.map(props.children, (child)=>child && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cloneElement"])(child, {
            source: id
        })) || null;
}
const __TURBOPACK__default__export__ = Source;
 //# sourceMappingURL=source.js.map
}}),
"[project]/node_modules/react-map-gl/dist/esm/types/public.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: require } = __turbopack_context__;
{
__turbopack_esm__({});
;
 //# sourceMappingURL=public.js.map
}}),
"[project]/node_modules/react-map-gl/dist/esm/types/style-spec-mapbox.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: require } = __turbopack_context__;
{
__turbopack_esm__({});
;
 //# sourceMappingURL=style-spec-mapbox.js.map
}}),
"[project]/node_modules/react-map-gl/dist/esm/exports-mapbox.js [app-client] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "AttributionControl": (()=>AttributionControl),
    "FullscreenControl": (()=>FullscreenControl),
    "GeolocateControl": (()=>GeolocateControl),
    "Layer": (()=>Layer),
    "Map": (()=>Map),
    "Marker": (()=>Marker),
    "NavigationControl": (()=>NavigationControl),
    "Popup": (()=>Popup),
    "ScaleControl": (()=>ScaleControl),
    "Source": (()=>Source),
    "default": (()=>__TURBOPACK__default__export__),
    "useMap": (()=>useMap)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$map$2d$gl$2f$dist$2f$esm$2f$components$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-map-gl/dist/esm/components/map.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$map$2d$gl$2f$dist$2f$esm$2f$components$2f$marker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-map-gl/dist/esm/components/marker.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$map$2d$gl$2f$dist$2f$esm$2f$components$2f$popup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-map-gl/dist/esm/components/popup.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$map$2d$gl$2f$dist$2f$esm$2f$components$2f$attribution$2d$control$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-map-gl/dist/esm/components/attribution-control.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$map$2d$gl$2f$dist$2f$esm$2f$components$2f$fullscreen$2d$control$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-map-gl/dist/esm/components/fullscreen-control.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$map$2d$gl$2f$dist$2f$esm$2f$components$2f$navigation$2d$control$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-map-gl/dist/esm/components/navigation-control.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$map$2d$gl$2f$dist$2f$esm$2f$components$2f$geolocate$2d$control$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-map-gl/dist/esm/components/geolocate-control.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$map$2d$gl$2f$dist$2f$esm$2f$components$2f$scale$2d$control$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-map-gl/dist/esm/components/scale-control.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$map$2d$gl$2f$dist$2f$esm$2f$components$2f$layer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-map-gl/dist/esm/components/layer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$map$2d$gl$2f$dist$2f$esm$2f$components$2f$source$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-map-gl/dist/esm/components/source.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$map$2d$gl$2f$dist$2f$esm$2f$components$2f$use$2d$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-map-gl/dist/esm/components/use-map.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
function useMap() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$map$2d$gl$2f$dist$2f$esm$2f$components$2f$use$2d$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMap"])();
}
const mapLib = __turbopack_require__("[project]/node_modules/mapbox-gl/dist/mapbox-gl.js [app-client] (ecmascript, async loader)")(__turbopack_import__);
const Map = (()=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(function Map(props, ref) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$map$2d$gl$2f$dist$2f$esm$2f$components$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(props, ref, mapLib);
    });
})();
const Marker = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$map$2d$gl$2f$dist$2f$esm$2f$components$2f$marker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
const Popup = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$map$2d$gl$2f$dist$2f$esm$2f$components$2f$popup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
const AttributionControl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$map$2d$gl$2f$dist$2f$esm$2f$components$2f$attribution$2d$control$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
const FullscreenControl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$map$2d$gl$2f$dist$2f$esm$2f$components$2f$fullscreen$2d$control$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
const NavigationControl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$map$2d$gl$2f$dist$2f$esm$2f$components$2f$navigation$2d$control$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
const GeolocateControl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$map$2d$gl$2f$dist$2f$esm$2f$components$2f$geolocate$2d$control$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
const ScaleControl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$map$2d$gl$2f$dist$2f$esm$2f$components$2f$scale$2d$control$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
const Layer = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$map$2d$gl$2f$dist$2f$esm$2f$components$2f$layer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
const Source = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$map$2d$gl$2f$dist$2f$esm$2f$components$2f$source$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
;
;
const __TURBOPACK__default__export__ = Map;
;
;
 //# sourceMappingURL=exports-mapbox.js.map
}}),
"[project]/node_modules/react-map-gl/dist/esm/exports-mapbox.js [app-client] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: require } = __turbopack_context__;
{
__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$map$2d$gl$2f$dist$2f$esm$2f$components$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-map-gl/dist/esm/components/map.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$map$2d$gl$2f$dist$2f$esm$2f$components$2f$marker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-map-gl/dist/esm/components/marker.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$map$2d$gl$2f$dist$2f$esm$2f$components$2f$popup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-map-gl/dist/esm/components/popup.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$map$2d$gl$2f$dist$2f$esm$2f$components$2f$attribution$2d$control$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-map-gl/dist/esm/components/attribution-control.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$map$2d$gl$2f$dist$2f$esm$2f$components$2f$fullscreen$2d$control$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-map-gl/dist/esm/components/fullscreen-control.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$map$2d$gl$2f$dist$2f$esm$2f$components$2f$geolocate$2d$control$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-map-gl/dist/esm/components/geolocate-control.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$map$2d$gl$2f$dist$2f$esm$2f$components$2f$navigation$2d$control$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-map-gl/dist/esm/components/navigation-control.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$map$2d$gl$2f$dist$2f$esm$2f$components$2f$scale$2d$control$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-map-gl/dist/esm/components/scale-control.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$map$2d$gl$2f$dist$2f$esm$2f$components$2f$layer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-map-gl/dist/esm/components/layer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$map$2d$gl$2f$dist$2f$esm$2f$components$2f$source$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-map-gl/dist/esm/components/source.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$map$2d$gl$2f$dist$2f$esm$2f$components$2f$use$2d$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-map-gl/dist/esm/components/use-map.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$map$2d$gl$2f$dist$2f$esm$2f$components$2f$use$2d$control$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-map-gl/dist/esm/components/use-control.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$map$2d$gl$2f$dist$2f$esm$2f$types$2f$public$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-map-gl/dist/esm/types/public.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$map$2d$gl$2f$dist$2f$esm$2f$types$2f$style$2d$spec$2d$mapbox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-map-gl/dist/esm/types/style-spec-mapbox.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$map$2d$gl$2f$dist$2f$esm$2f$exports$2d$mapbox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/react-map-gl/dist/esm/exports-mapbox.js [app-client] (ecmascript) <locals>");
}}),
"[project]/node_modules/react-map-gl/dist/esm/index.js [app-client] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: require } = __turbopack_context__;
{
__turbopack_esm__({});
;
;
 //# sourceMappingURL=index.js.map
}}),
"[project]/node_modules/react-map-gl/dist/esm/index.js [app-client] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: require } = __turbopack_context__;
{
__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$map$2d$gl$2f$dist$2f$esm$2f$exports$2d$mapbox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/react-map-gl/dist/esm/exports-mapbox.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$map$2d$gl$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/react-map-gl/dist/esm/index.js [app-client] (ecmascript) <locals>");
}}),
}]);

//# sourceMappingURL=_1ab6f8._.js.map