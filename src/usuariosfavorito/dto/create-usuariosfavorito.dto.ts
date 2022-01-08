/* eslint-disable prettier/prettier */
import { IsInt, IsNotEmpty } from 'class-validator';

export class CreateUsuariosfavoritoDto {

  @IsNotEmpty()
  @IsInt()
  tweetid: number;

  @IsNotEmpty()
  @IsInt()
  usuarioid: number;
}
