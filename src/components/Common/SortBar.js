import React from 'react';

/**
 * @param sortOption
 */
class SortBar extends React.Component {
    handleClick = (e) => {
        // Get new sort based on index of sortOption array
        if (this.props.sortOptions[e.target.value]) {
            const newSort = this.props.sortOptions[e.target.value].sort;
            this.props.onSortChange(newSort);
        }
    }

    render() {
        return (
            <div>
                <select name="cardSort" onChange={this.handleClick}>
                    <option value="">Select a sort</option>
                    {this.props.sortOptions.map((sortOption, i) =>
                        <option key={sortOption.key} value={i} disabled={sortOption.disabled}>
                            {sortOption.key}
                        </option>
                    )}
                </select>
            </div>
        );
    }
}

export default SortBar;