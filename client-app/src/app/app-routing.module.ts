import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
{
    path: '',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule),
    pathMatch: 'full'
},
{
    path: '**',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
}];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}
