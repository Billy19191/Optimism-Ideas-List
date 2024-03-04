export type TabStateType = {

    // sort have four option
    // a stand for sort by alphabet A-Z
    // n stand for no sort
    // le stand for low effort
    // he stand for high effort
    sort: "a" | "le" | "he" | "n";
    index: number;
    // view have two option
    // g stand for grid
    // l stand for list
    view: "g" | "l";
    filter: boolean;
    dialog: boolean;
    drawer: boolean;
}

export type CheckBoxStateType = {
    "Type": string[]
    "Effort": string[]
    "Label": string[]
    "Category": string[]
    "SkillSets": string[]
}

export interface MarkDownData extends LoadMarkDownType {
    title: string;
    description: string;
    lang: string;
    type: string;
    category: string;
    effort: string;
    labels: string;
    skillsets: string;
};
  
export type LoadMarkDownType = {
    id: string;
    contentHtml: string;
};
  