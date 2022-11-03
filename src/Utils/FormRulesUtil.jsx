export const familyFormRules = {
    'familyName': {required: true}
}

export const sheetFormRules = {
    'family': {required: true},
    'firstName' : {required: true},
    'isStructure': {required: true},
    'dateOfBirth': {required: true},
    'currentLevel': {required: true},
}

export const biographyRules = {
    'sheet': {required: true},
    'dateFrom': {required: true},
    'biographyDescription': {required: true},
}

export const structureRules = {
    'family': {required: true},
    'superior': {required: true},
    'subordinate': {required: true},
}