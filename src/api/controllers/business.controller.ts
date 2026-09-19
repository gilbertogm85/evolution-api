import { getCatalogDto, getCollectionsDto, getProductDto } from '@api/dto/business.dto';
import { InstanceDto } from '@api/dto/instance.dto';
import { WAMonitoringService } from '@api/services/monitor.service';

export class BusinessController {
  constructor(private readonly waMonitor: WAMonitoringService) {}

  public async fetchCatalog({ instanceName }: InstanceDto, data: getCatalogDto) {
    return await this.waMonitor.waInstances[instanceName].fetchCatalog(instanceName, data);
  }

  public async fetchCollections({ instanceName }: InstanceDto, data: getCollectionsDto) {
    return await this.waMonitor.waInstances[instanceName].fetchCollections(instanceName, data);
  }

  public async fetchProduct({ instanceName }: InstanceDto, data: getProductDto) {
    return await this.waMonitor.waInstances[instanceName].fetchProduct(instanceName, data);
  }
}
