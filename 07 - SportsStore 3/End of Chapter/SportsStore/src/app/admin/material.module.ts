import { NgModule } from "@angular/core";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from "@angular/material/button";
import { MatTableModule } from "@angular/material/table";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';

const features: any[] = [MatToolbarModule,MatSidenavModule,MatIconModule,
    MatDividerModule, MatButtonModule, MatTableModule, MatPaginatorModule, 
    MatFormFieldModule, MatInputModule, MatCheckboxModule];

@NgModule({
    imports: [features],
    exports: [features]
})
export class MaterialFeatures {}