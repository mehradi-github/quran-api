import { CreateChapterInput } from './create-chapter.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateChapterInput extends PartialType(CreateChapterInput) {
  @Field(() => Int)
  id: number;
}
