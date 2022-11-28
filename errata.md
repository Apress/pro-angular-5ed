# Errata for *Pro Angular, 5th Edition*

This file contains errors that are likely to prevent the code examples from working as described in ths book. See [this](typos.md) file for small mistakes that I intend to correct in the next edition.

---

**Chapter 1**

On page 22, the type package installed by Listing 1-31 should specify a version, like this:

    npm install --save-dev @types/inquirer@7.3.3

(Thanks to J Fern for reporting this problem)

---


**Chapter 3**

On Page 44, the command shown in `Listing 3-3` is incorrect. It should be:

>ng config projects.Primer.architect.build.options.styles '[""src/styles.css"", ""node_modules/bootstrap/dist/css/bootstrap.min.css""]'

(Thanks to Chris Kiihne for reporting this problem)

---

**Chaper 8**

On page 196, the command shown in Listing 8-1 produces the following error when installing the PWA package:

    An unhandled exception occurred: Cannot find module '@schematics/angular/utility'

To avoid this problem, use this command, which specifies a package version:

    ng add @angular/pwa@13.0.3

(Thanks to Bill Longabaugh for reporting this problem)