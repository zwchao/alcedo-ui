/**
 * @file DraggableTreeNode component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {DragSource, DropTarget} from 'react-dnd';

import CircularLoading from '../CircularLoading';
import Tip from '../Tip';
import Theme from '../Theme';
import IconButton from '../IconButton';
import Radio from '../Radio';
import Checkbox from '../Checkbox';

import Util from '../_vendors/Util';
import Calculation from '../_vendors/Calculation';
import Position from '../_statics/Position';
import SelectMode from '../_statics/SelectMode';
import DragDrop from '../_vendors/DragDrop';

const DRAG_TREE_NODE_SYMBOL = Symbol('DRAG_TREE_NODE');

@DropTarget(DRAG_TREE_NODE_SYMBOL, DragDrop.getVerticalTarget(), connect => ({
    connectDropTarget: connect.dropTarget()
}))
@DragSource(DRAG_TREE_NODE_SYMBOL, DragDrop.getSource(), (connect, monitor) => ({
    connectDragPreview: connect.dragPreview(),
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
}))
export default class DraggableTreeNode extends Component {

    static SelectMode = SelectMode;
    static Theme = Theme;

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.state = {
            collapsed: false,
            tipVisible: false
        };

        this.showTip = ::this.showTip;
        this.hideTip = ::this.hideTip;
        this.checkboxChangeHandler = ::this.checkboxChangeHandler;
        this.radioChangeHandler = ::this.radioChangeHandler;
        this.toggleTreeNode = ::this.toggleTreeNode;
        this.touchTapHandler = ::this.touchTapHandler;
        this.mouseOverHandler = ::this.mouseOverHandler;

    }

    showTip() {

        if (this.state.tipVisible) {
            return;
        }

        this.setState({
            tipVisible: true
        });

    }

    hideTip() {
        this.setState({
            tipVisible: false
        });
    }

    toggleTreeNode(e) {

        e.stopPropagation();

        this.setState({
            collapsed: !this.state.collapsed
        });

    }

    checkboxChangeHandler(e) {

        const {data, path, value, onSelect, onDeselect} = this.props;

        if (!Calculation.isItemChecked(data, value, this.props)) {
            onSelect && onSelect(data, path, e);
        } else {
            onDeselect && onDeselect(data, path, e);
        }

    }

    radioChangeHandler(e) {
        const {data, path, onSelect} = this.props;
        onSelect && onSelect(data, path, e);
    }

    touchTapHandler(e) {

        e.preventDefault();

        const {data, path, disabled, isLoading, readOnly} = this.props;

        if (disabled || isLoading || readOnly || data.disabled || data.isLoading || data.readOnly) {
            return;
        }

        const {onTouchTap} = this.props;
        onTouchTap && onTouchTap(data, path, e);

        const {selectMode} = this.props;

        switch (selectMode) {
            case SelectMode.MULTI_SELECT:
                this.checkboxChangeHandler(e);
                return;
            case SelectMode.SINGLE_SELECT:
                this.radioChangeHandler(e);
                return;
        }

    }

    mouseOverHandler(e) {
        this.showTip();
        const {onMouseOver} = this.props;
        onMouseOver && onMouseOver(e);
    }

    render() {

        const {

                connectDragPreview, connectDragSource, connectDropTarget, isDragging, isDraggableAnyWhere, anchorIconCls,

                index, depth, path, theme, selectTheme, selectMode, data, value,
                disabled, isLoading, readOnly, allowCollapse, renderer,

                collapsedIconCls, expandedIconCls, radioUncheckedIconCls, radioCheckedIconCls,
                checkboxUncheckedIconCls, checkboxCheckedIconCls, checkboxIndeterminateIconCls

            } = this.props,
            {collapsed, tipVisible} = this.state,

            checked = Calculation.isItemChecked(data, value, this.props),

            isNodeLoading = data.isLoading || isLoading,
            isNodeDisabled = data.disabled || disabled || isNodeLoading,

            nodeClassName = (theme ? ` theme-${theme}` : '') + (isDragging ? ' dragging' : '')
                + (data.className ? ' ' + data.className : ''),
            nodeStyle = {
                ...data.style,
                paddingLeft: (depth + 1) * 20
            },

            loadingIconPosition = (data.rightIconCls && !data.iconCls) ? 'right' : 'left',

            anchorEl = <i className={`${anchorIconCls} draggable-tree-node-anchor`}
                          aria-hidden="true"></i>,

            el = connectDropTarget(
                <div className="draggable-tree-node-wrapper">

                    <div ref={el => this.tipTriggerEl = el}
                         className={'draggable-tree-node' + nodeClassName}
                         style={nodeStyle}
                         disabled={isNodeDisabled}
                         readOnly={readOnly}
                         onTouchTap={this.touchTapHandler}
                         onMouseOver={this.mouseOverHandler}>

                        <div className="draggable-tree-node-inner">

                            {
                                allowCollapse && data.children && data.children.length > 0 ?
                                    <IconButton className="draggable-tree-node-collapse-icon"
                                                iconCls={collapsed ?
                                                    data.collapsedIconCls || collapsedIconCls
                                                    :
                                                    data.expandedIconCls || expandedIconCls}
                                                onTouchTap={this.toggleTreeNode}/>
                                    :
                                    null
                            }

                            {
                                selectMode === SelectMode.SINGLE_SELECT && (radioUncheckedIconCls || radioCheckedIconCls) ?
                                    <Radio className="draggable-tree-node-select"
                                           theme={selectTheme}
                                           checked={checked}
                                           disabled={isNodeDisabled}
                                           uncheckedIconCls={data.radioUncheckedIconCls || radioUncheckedIconCls}
                                           checkedIconCls={data.radioCheckedIconCls || radioCheckedIconCls}
                                           disableTouchRipple={true}/>
                                    :
                                    null
                            }

                            {
                                selectMode === SelectMode.MULTI_SELECT ?
                                    <Checkbox className="draggable-tree-node-select"
                                              theme={selectTheme}
                                              checked={checked}
                                              disabled={isNodeDisabled}
                                              uncheckedIconCls={data.checkboxUncheckedIconCls || checkboxUncheckedIconCls}
                                              checkedIconCls={data.checkboxCheckedIconCls || checkboxCheckedIconCls}
                                              indeterminateIconCls={data.checkboxIndeterminateIconCls || checkboxIndeterminateIconCls}
                                              disableTouchRipple={true}/>
                                    :
                                    null
                            }

                            {
                                isNodeLoading && loadingIconPosition === 'left' ?
                                    <div className="button-icon button-icon-left">
                                        <CircularLoading className="button-loading-icon"
                                                         size="small"/>
                                    </div>
                                    :
                                    (
                                        data.iconCls ?
                                            <i className={`button-icon button-icon-left ${data.iconCls}`}
                                               aria-hidden="true"></i>
                                            :
                                            null
                                    )
                            }

                            {
                                data.itemRenderer && typeof data.itemRenderer === 'function' ?
                                    data.itemRenderer(data, index)
                                    :
                                    (
                                        renderer && typeof renderer === 'function' ?
                                            renderer(data, index)
                                            :
                                            (
                                                data.desc ?
                                                    <div className="draggable-tree-node-content">
                                                    <span className="draggable-tree-node-content-value">
                                                        {data.text}
                                                    </span>
                                                        <span className="draggable-tree-node-content-desc">
                                                        {data.desc}
                                                    </span>
                                                    </div>
                                                    :
                                                    data.text
                                            )
                                    )
                            }

                            {
                                isNodeLoading && loadingIconPosition === 'right' ?
                                    <CircularLoading className="button-icon button-icon-right button-loading-icon"
                                                     size="small"/>
                                    :
                                    (
                                        data.rightIconCls ?
                                            <i className={`button-icon button-icon-right ${data.rightIconCls}`}
                                               aria-hidden="true"></i>
                                            :
                                            null
                                    )
                            }

                            {
                                isDraggableAnyWhere ?
                                    anchorEl
                                    :
                                    connectDragSource(anchorEl)
                            }

                        </div>

                        {
                            data.tip ?
                                <Tip visible={tipVisible}
                                     triggerEl={this.tipTriggerEl}
                                     position={data.tipPosition}
                                     onRequestClose={this.hideTip}>
                                    {data.tip}
                                </Tip>
                                :
                                null
                        }

                    </div>

                    <div className={'draggable-tree-node-children' + (collapsed ? ' collapsed' : '')}>
                        {
                            data.children && data.children.map((item, index) => {
                                return (
                                    <DraggableTreeNode {...this.props}
                                                       key={index}
                                                       data={item}
                                                       index={index}
                                                       depth={depth + 1}
                                                       path={path ? [...path, index] : [index]}/>
                                );
                            })
                        }
                    </div>

                </div>
            );

        return isDraggableAnyWhere ?
            connectDragSource(el)
            :
            connectDragPreview(el);

    }
};

DraggableTreeNode.propTypes = {

    index: PropTypes.number,
    depth: PropTypes.number,
    path: PropTypes.array,

    theme: PropTypes.oneOf(Util.enumerateValue(Theme)),

    selectTheme: PropTypes.oneOf(Util.enumerateValue(Theme)),
    selectMode: PropTypes.oneOf(Util.enumerateValue(SelectMode)),

    data: PropTypes.object,
    value: PropTypes.any,

    idField: PropTypes.string,
    valueField: PropTypes.string,
    displayField: PropTypes.string,
    descriptionField: PropTypes.string,

    disabled: PropTypes.bool,
    isLoading: PropTypes.bool,
    readOnly: PropTypes.bool,
    allowCollapse: PropTypes.bool,

    renderer: PropTypes.func,

    collapsedIconCls: PropTypes.string,
    expandedIconCls: PropTypes.string,
    radioUncheckedIconCls: PropTypes.string,
    radioCheckedIconCls: PropTypes.string,
    checkboxUncheckedIconCls: PropTypes.string,
    checkboxCheckedIconCls: PropTypes.string,
    checkboxIndeterminateIconCls: PropTypes.string,

    isDraggableAnyWhere: PropTypes.bool,
    anchorIconCls: PropTypes.string,

    onTouchTap: PropTypes.func,
    onSelect: PropTypes.func,
    onDeselect: PropTypes.func,
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func,

    // dnd
    connectDragPreview: PropTypes.func,
    connectDragSource: PropTypes.func,
    connectDropTarget: PropTypes.func,
    isDragging: PropTypes.bool,
    onMove: PropTypes.func

};

DraggableTreeNode.defaultProps = {

    index: 0,
    depth: 0,
    path: null,

    theme: Theme.DEFAULT,

    selectTheme: Theme.DEFAULT,
    selectMode: SelectMode.SINGLE_SELECT,

    data: null,
    value: null,

    idField: 'id',
    valueField: 'value',
    displayField: 'text',
    descriptionField: 'desc',

    disabled: false,
    isLoading: false,
    readOnly: false,
    allowCollapse: true,

    iconCls: null,
    rightIconCls: null,

    tip: null,
    tipPosition: Position.BOTTOM,

    collapsedIconCls: 'fa fa-caret-right',
    expandedIconCls: 'fa fa-caret-down',
    radioUncheckedIconCls: null,
    radioCheckedIconCls: null,
    checkboxUncheckedIconCls: 'fa fa-square-o',
    checkboxCheckedIconCls: 'fa fa-check-square',
    checkboxIndeterminateIconCls: 'fa fa-minus-square',

    isDraggableAnyWhere: false,
    anchorIconCls: 'fa fa-bars'

};