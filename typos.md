# Typos for *Pro Angular, 5th Edition*

This file contains smaller errors that are unlikely to prevent the code examples from working and which I will correct in the next edition of the book. See [this](errata.md) file for mistakes that prevent the code examples from working as expected.

---

**Chapter 2**

On page 20, this sentence:

>   In this case, the data bindings tell Angular to get the value of the username and 
itemCount properties and insert them into the content of the h3 and div elements.

should be:

>   In this case, the data bindings tell Angular to get the value of the username and 
itemCount properties and insert them into the content of the h3 and **h6** elements.

(Thanks to Piyapan Weesapen for reporting this problem)

---

**Chapter 3**

On page 53, this sentence:

>   The first new statement invokes myFunction with a number, 10.

should be:

>   The first new statement invokes myFunction with a number, **1**.

(Thanks to Piyapan Weesapen for reporting this problem)

---

On page 71, this sentence:

>   As explainer earlier, TypeScript won’t let null or undefined to be assigned to variables unless they have been 
defined with a suitable type union.

should be:

> As **explained** earlier, TypeScript won’t let null or undefined to be assigned to variables unless they have been 
defined with a suitable type union.

(Thanks to Piyapan Weesapen for reporting this problem)

---

**Chapter 4**

This sentence:

> This chapter uses the Primer project created in Chapter 4

should be:

> This chapter uses the Primer project created in Chapter **3**.

(Thanks to Piyapan Weesapen for reporting this problem)

---

**Chapter 7**

On page 166, Listing 7-13 contians duplicate routes for `main`. Use this code instead:

    import { NgModule } from "@angular/core";
    import { CommonModule } from "@angular/common";
    import { FormsModule } from "@angular/forms";
    import { RouterModule } from "@angular/router";
    import { AuthComponent } from "./auth.component";
    import { AdminComponent } from "./admin.component";
    import { AuthGuard } from "./auth.guard";
    let routing = RouterModule.forChild([
        { path: "auth", component: AuthComponent },
        { path: "main", component: AdminComponent, canActivate: [AuthGuard] },
        { path: "**", redirectTo: "auth" }
    ]);
    @NgModule({
        imports: [CommonModule, FormsModule, routing],
        declarations: [AuthComponent, AdminComponent],
        providers: [AuthGuard]
    })
    export class AdminModule { }

(Thanks to Bill Longabaugh for reporting this problem)

---

**Chapter 8**

On page 204, the command shown in Listing 8-12 requires `sudo` when using Linux/macOS.

(Thanks to Bill Longabaugh for reporting this problem)

---

**Chapter 9**

On page 227, this sentence:

>   The Bootstrap package isn’t specific to Angular development and doesn’t use the schematics API, 
> which means that a manual change must be made to the angular.config file to include the Bootstrap CSS 
> stylesheet in the styles bundle, which is done by running the command shown in Listing 9-7 in the example 
> folder. 

should be:

>   The Bootstrap package isn’t specific to Angular development and doesn’t use the schematics API, 
> which means that a manual change must be made to the **angular.json** file to include the Bootstrap CSS 
> stylesheet in the styles bundle, which is done by running the command shown in Listing 9-7 in the example 
> folder. 

(Thanks to Piyapan Weesapen for reporting this problem)

---

On page 239, this sentence:

> This is done using the Domain Object Model (DOM) API provided by the browser for JavaScript applications, and the changes can be seen only by right-clicking in the browser window and selecting Inspect from the pop-up menu, producing the following result:

should be:

> This is done using the **Document** Object Model (DOM) API provided by the browser for JavaScript applications, and the changes can be seen only by right-clicking in the browser window and selecting Inspect from the pop-up menu, producing the following result:

(Thanks to Piyapan Weesapen for reporting this problem)

---

On page 246, the caption for Listing 9-26 should be:

>   Changing the Custom Element in the index.html File in the **src/app** Folder

(Thanks to Piyapan Weesapen for reporting this problem)

---

**Chapter 10**

On page 254, the paragraph prior to Table 10-4 incorrectly states that there are five bindings, when there are only four.

(Thanks to Piyapan Weesapen for reporting this problem)

---

On page 255, this sentence references the m-2 class, which is not applied by the example:

>The effect is that the ngClass directive will add the host element to four classes: text-white, ***m-2***, and 
p-2, which Bootstrap uses...

(Thanks to Piyapan Weesapen for reporting this problem)

---

**Chapter 13**

On page 354, this sentence:

>   The ElementRef class defines a single property, nativeElement, which returns the object used by the browser to represent the element in the Domain Object Model.

should be:

> The ElementRef class defines a single property, nativeElement, which returns the object used by the browser to represent the element in the **Document** Object Model.

(Thanks to Piyapan Weesapen for reporting this problem)

---

**Chapter 15**

On page 429, this sentence:

>   This is known as the component’s view encapsulation behavior, and what Angular is doing is emulating a feature known as the shadow DOM, which allows sections of the Domain Object Model to be isolated so they have their own scope, meaning that JavaScript, styles, and templates can be applied to part of the HTML document.

should be:

>   This is known as the component’s view encapsulation behavior, and what Angular is doing is emulating a feature known as the shadow DOM, which allows sections of the **Document** Object Model to be isolated so they have their own scope, meaning that JavaScript, styles, and templates can be applied to part of the HTML document.

(Thanks to Piyapan Weesapen for reporting this problem)

