import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { AlertEntity } from './entities/alert.entity';
import { AlertService } from './alert.service';

@Crud({
  model: {
    type: AlertEntity,
  },
})
@Controller('alert')
export class AlertController implements CrudController<AlertEntity> {
  constructor(public service: AlertService) {}
}
