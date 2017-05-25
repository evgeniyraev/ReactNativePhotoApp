import EventEmitter from 'EventEmitter';

class Model  extends EventEmitter {

    constructor()
    {
        super();

        this.data = {};

		this.pictures = [];
    }

    setProperty(name, value)
    {
        this.data[name] = value;

        this.emit(name)
    }

    getProperty(name)
    {
        return this.data[name];
    }

	get pictures()
	{
		return this.getProperty('pictures');
	}

	set pictures(value)
	{
		this.setProperty('pictures', value);
	}
	
	get selectedPicture()
	{
		return this.getProperty('selectedPicture');
	}

	set selectedPicture(value)
	{
		this.setProperty('selectedPicture', value);
	}

	addPicture(picture)
	{
		this.pictures.push(picture);
		this.emit('pictures');
	}
}

export default new Model();
