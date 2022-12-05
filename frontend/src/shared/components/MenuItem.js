import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const MenuItem = (props) => {
    const { classes } = props;

    return (
        <li>
            <a href={classes.href}>
                <i class="fa fa-home fa-lg">
                    <FontAwesomeIcon icon={classes.icon} />
                </i>
                <span class="nav-text">
                {classes.name}
                </span>
            </a>
        </li>
    )
}
MenuItem.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default MenuItem;