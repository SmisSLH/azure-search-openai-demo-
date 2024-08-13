import { Example } from "./Example";

import styles from "./Example.module.css";

const DEFAULT_EXAMPLES: string[] = [
    "三井不動産の2024年度以降の事業戦略について、どのような戦略を立てていますか？",
    "JR東海の事業戦略における商業施設領域で、具体的な戦略方針は何ですか？",
    "Fast Retailingの事業戦略において、活用しているITソリューションは何がありますか？また、それはどのような目的を達成するために使用されますか？"
];

const GPT4V_EXAMPLES: string[] = [
    "三井不動産の2024年度以降の事業戦略について、どのような戦略を立てていますか？",
    "JR東海の事業戦略における商業施設領域で、具体的な戦略方針は何ですか？",
    "Fast Retailingの事業戦略において、活用しているITソリューションは何がありますか？また、それはどのような目的を達成するために使用されますか？"
];

interface Props {
    onExampleClicked: (value: string) => void;
    useGPT4V?: boolean;
}

export const ExampleList = ({ onExampleClicked, useGPT4V }: Props) => {
    return (
        <ul className={styles.examplesNavList}>
            {(useGPT4V ? GPT4V_EXAMPLES : DEFAULT_EXAMPLES).map((question, i) => (
                <li key={i}>
                    <Example text={question} value={question} onClick={onExampleClicked} />
                </li>
            ))}
        </ul>
    );
};
