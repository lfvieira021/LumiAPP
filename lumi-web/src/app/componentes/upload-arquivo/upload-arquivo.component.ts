import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload-arquivo',
  templateUrl: './upload-arquivo.component.html',
  styleUrls: ['./upload-arquivo.component.css']
})
export class UploadArquivoComponent implements OnInit {

  nomeArquivo: string = '';
  arquivoSelecionado: any;

  constructor() { }

  ngOnInit(): void {
  }

  public uploadArquivo(arquivo: any) {
    const input = arquivo.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.arquivoSelecionado = input.files[0];
      this.nomeArquivo = this.arquivoSelecionado.name;
    }
  }

  public transcreverArquivo(){
    const formData = new FormData();

    formData.append("arquivo", this.arquivoSelecionado);

    //service
  }

}
