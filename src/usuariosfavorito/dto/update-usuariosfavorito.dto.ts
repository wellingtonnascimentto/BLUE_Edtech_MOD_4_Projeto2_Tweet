import { PartialType } from '@nestjs/swagger';
import { CreateUsuariosfavoritoDto } from './create-usuariosfavorito.dto';

export class UpdateUsuariosfavoritoDto extends PartialType(CreateUsuariosfavoritoDto) {}
