import { Routes, RouterModule } from "@angular/router";
import { TableComponent } from "./core/table.component";
import { FormComponent } from "./core/form.component";
import { NotFoundComponent } from "./core/notFound.component";
import { UnsavedGuard } from "./core/unsaved.guard";

const routes: Routes = [
    {
        path: "ondemand",
        loadChildren: () => import("./ondemand/ondemand.module")
                                .then(m => m.OndemandModule)
    },
    { path: "", redirectTo: "/ondemand", pathMatch: "full" }
]

export const routing = RouterModule.forRoot(routes);
