import { GoBell, GoCloudDownload, GoDatabase } from 'react-icons/go';

import Button from '../../components/button/Button';
const ButtonPage = () => {
  return (
    <div>
      <div>
        <Button primary rounded outline className="mb-1">
          <GoBell />
          1st: first
        </Button>
      </div>
      <div>
        <Button secondary outline>
          <GoCloudDownload />
          2nd
        </Button>
      </div>
      <div>
        <Button success>
          <GoDatabase />
          3rd
        </Button>
      </div>
      <div>
        <Button warning outline>
          4th
        </Button>
      </div>
      <div>
        <Button danger outline rounded>
          ffffffIve
        </Button>
      </div>
    </div>
  );
};

export default ButtonPage;
