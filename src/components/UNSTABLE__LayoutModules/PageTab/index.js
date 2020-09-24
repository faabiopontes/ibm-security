/**
 * @file Page tab module.
 * @copyright IBM Security 2020
 */

import { node } from 'prop-types';
import React from 'react';

import LayoutModule from '..';

const namespace = 'page-tab';

/**
 * Page tab modules provide orderly tab navigation for a page.
 */
const PageTab = ({ children, ...other }) => (
  <LayoutModule type={namespace} {...other}>
    {children}
  </LayoutModule>
);

PageTab.propTypes = {
  /** Provide the `Tabs`, and optionally `PageTabDetails`, for the `PageTab` */
  children: node.isRequired,
};

const PageTabDetails = ({ children, ...other }) => (
  <LayoutModule type={`${namespace}__details`} {...other}>
    {children}
  </LayoutModule>
);

PageTabDetails.propTypes = {
  /** Provide the contents of the `PageTabDetails` */
  children: node.isRequired,
};

export default PageTab;

export { PageTabDetails };
