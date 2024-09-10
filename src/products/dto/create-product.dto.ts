import { Type } from "class-transformer";
import { IsNumber, IsOptional, IsString, Min } from "class-validator";

export class CreateProductDto {

    @IsString()
    public name: string;
    
    @IsString()
    public description: string;
    
    @IsNumber({
        maxDecimalPlaces: 4
    })
    @Min(0)
    @Type(() => Number)
    public price: number;
    
    @IsNumber()
    @Min(0)
    @Type(() => Number)
    public stock: number;
    
    @IsString()
    @IsOptional()
    public image: string;
        
    @IsNumber()
    @IsOptional()
    public deleted_at: Date;
    
    /*constructor(partial: Partial<CreateProductDto>) {
        Object.assign(this, partial);
    }*/

}
