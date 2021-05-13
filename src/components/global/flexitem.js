import * as React from "react";
import {justify} from "../consts/FlexJustify";
import {align} from "../consts/FlexAlign";
import {direction} from "../consts/FlexDirection";

export class FlexItem extends React.Component {
    static defaultProps = {
        justifyContent: justify.FLEX_START,
        alignItems: align.FLEX_START,
        flexDirection: direction.ROW,
        className: ""
    };

    render() {
        return <div className={`${this.props.className}`}
                    style={{
                        flexDirection: this.props.flexDirection,
                        justifyContent: this.props.justifyContent,
                        alignItems: this.props.alignItems
                    }}
                    children={this.props.children}/>;
    }
}
