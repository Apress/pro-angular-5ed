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

> This listing defines a JavaScript function, which receives a value as a parameter, uses
operator to add 10 to the value, and then writes out the result to the JavaScript console.

should be:

> This listing defines a JavaScript function, which receives a value as a parameter, uses
operator to add ***100*** to the value, and then writes out the result to the JavaScript console.

(Thanks to Nick Pavlou for reporting this problem)

---

On page 53, this sentence:

>   The first new statement invokes myFunction with a number, 10.

should be:

>   The first new statement invokes myFunction with a number, **1**.

(Thanks to Piyapan Weesapen for reporting this problem)

---

On page 62, this sentence:

> This may seem like a short list, but JavaScript manages to fit a lot of flexibility into these three types. 

should be:

> This may seem like a short list, but JavaScript manages to fit a lot of flexibility into these **five** types. 

(Thanks to Dragoș Grigore for reporting this problem)

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

On page 73, this sentence:

> This chapter uses the Primer project created in Chapter 4

should be:

> This chapter uses the Primer project created in Chapter **3**.

(Thanks to Piyapan Weesapen for reporting this problem)

---

On page 80, the caption for Listing 4-10 should be:

> Creating ***and*** Populating an Array in the main.ts File in the src Folder

(Thanks to Nick Pavlou for reporting this problem)

---

**Chapter 6**

On page 149, this sentence:

> Angular adds elements to the ng-dirty, ng-valid, and ng-valid classes to indicate their validation status.

should be:

> Angular adds elements to the ng-dirty, ng-valid, and ***ng-invalid*** classes to indicate their validation status.

(Thanks to Dragoș Grigore for reporting this problem)

---

**Chapter 7**

On page 163, this sentence:

>The pipe method and map function are provided by the RxJS package, and they allow the response event 
from the server, which is presented through an Observable<any> to be transformed into an event in the 
Observable<bool> that is the result of the authenticate method.

should be:

>The pipe method and map function are provided by the RxJS package, and they allow the response event 
from the server, which is presented through an Observable<any> to be transformed into an event in the 
Observable<***boolean***> that is the result of the authenticate method.

(Thanks to Dragoș Grigore for reporting this problem)

---

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

On page 178, Listing 7-29 omits a `td` end tag.

(Thanks to Piyapan Weesapen for reporting this problem)

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

On page 266, this sentence:

> For this element, membership of the bg-info and bg-warning classes is tied to the value of the price property of a Product object, as shown in Figure 10-9. 

should be:

> For this element, membership of the bg-info and ***bg-success*** classes is tied to the value of the price property of a Product object, as shown in Figure 10-9. 

---

**Chapter 13**

On page 349, the color of the `Name` column in the table displayed by Figure 13-3 doesn't match the output from the application. 

(Thanks to Nick Mulder for reporting this problem)

---

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

---

**Chapter 27**

On page 817, this sentence:

> In the next chapter, I describe the features that Angular provides to support unit testing.

does not correctly describe the next chapter, which covers component libraries.

(Thanks to Frank Ibem for reporting this problem)

---

On page 837, this sentence:

> The mast-paginator component displays pagination controls for the table data.

should be:

> The **mat-paginator** component displays pagination controls for the table data.

(Thanks to Frank Ibem for reporting this problem)



