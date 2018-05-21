export class Advertisement {
    public AdvertisementId: number;
    public Description: string;
    public AdvertisementDate: Date;
    public Price: number;
    public VehicleTypeName: string;
    public VehicleTypeId: number;
    public VehicleMakeName: string;
    public VehicleMakeId: number;
    public VehicleModelName: string;
    public VehicleModelId: number;
    public FirstnameUser: string;
    public LastnameUser: string;
    public Features: string[];
    public ImagePath: string;
    public ImagePathSecured: any;
    public AdvertisementTitle: string;
    public Registered?: boolean;
    public Transmission: string;
    public ExteriorColor: string;
    public InteriorColor: string;
    public Mileage?: number;
    public FuelType: string;
    public EnginePower?: number;
    public HorsePower?: number;
    public Images: string[];
}
