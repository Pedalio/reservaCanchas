import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ReservaModule } from './reserva/reserva.module';
import {ConfigModule} from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    ReservaModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'bzg8lthjvbopykofymv6-mysql.services.clever-cloud.com',
      port: 3306,
      username: 'ujmufc1gmhkmm5v9',
      password: 'ZbJdTZz91NpBZ9DGUzyw',
      database: 'bzg8lthjvbopykofymv6',
      autoLoadEntities: true,
      synchronize: true,
    }),
    UserModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
