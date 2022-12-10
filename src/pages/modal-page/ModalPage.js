import { useState } from 'react';

import Modal from '../../components/modal/Modal';
import Button from '../../components/button/Button';

const ModalPage = () => {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <div>
      <Button onClick={handleClick} primary rounded>
        Open Modal
      </Button>
      {showModal && (
        <Modal
          onClose={handleClose}
          actionBar={
            <Button onClick={handleClose} primary>
              I accept
            </Button>
          }
        >
          <p>This is an important agreement for you to accept!</p>
        </Modal>
      )}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed
        lectus maximus, vestibulum ipsum sit amet, accumsan velit. Ut accumsan
        purus nunc, a bibendum nisl elementum ornare. Nam consectetur quam sed
        quam semper pharetra. Pellentesque posuere viverra ipsum, commodo
        vulputate lorem fringilla in. Aliquam fringilla quam eu magna aliquet,
        vel ullamcorper mauris lobortis. Donec blandit arcu ut velit maximus, ut
        elementum leo maximus. Duis porttitor nisl sed risus commodo, vitae
        efficitur orci cursus. Suspendisse sollicitudin varius dolor eu varius.
        Vestibulum laoreet risus lectus, sollicitudin fermentum purus dictum
        sed. Donec eros enim, euismod at neque at, elementum ullamcorper nibh.
        Aenean viverra nibh erat, sed tempor dolor scelerisque et. Donec auctor
        odio a dui laoreet, non maximus justo gravida. Mauris nibh neque,
        laoreet consequat diam at, blandit porta lacus. Morbi id mi scelerisque,
        ullamcorper mauris at, convallis urna. Donec dapibus tortor eu volutpat
        feugiat. In vulputate eget mauris sed ornare.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed
        lectus maximus, vestibulum ipsum sit amet, accumsan velit. Ut accumsan
        purus nunc, a bibendum nisl elementum ornare. Nam consectetur quam sed
        quam semper pharetra. Pellentesque posuere viverra ipsum, commodo
        vulputate lorem fringilla in. Aliquam fringilla quam eu magna aliquet,
        vel ullamcorper mauris lobortis. Donec blandit arcu ut velit maximus, ut
        elementum leo maximus. Duis porttitor nisl sed risus commodo, vitae
        efficitur orci cursus. Suspendisse sollicitudin varius dolor eu varius.
        Vestibulum laoreet risus lectus, sollicitudin fermentum purus dictum
        sed. Donec eros enim, euismod at neque at, elementum ullamcorper nibh.
        Aenean viverra nibh erat, sed tempor dolor scelerisque et. Donec auctor
        odio a dui laoreet, non maximus justo gravida. Mauris nibh neque,
        laoreet consequat diam at, blandit porta lacus. Morbi id mi scelerisque,
        ullamcorper mauris at, convallis urna. Donec dapibus tortor eu volutpat
        feugiat. In vulputate eget mauris sed ornare.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed
        lectus maximus, vestibulum ipsum sit amet, accumsan velit. Ut accumsan
        purus nunc, a bibendum nisl elementum ornare. Nam consectetur quam sed
        quam semper pharetra. Pellentesque posuere viverra ipsum, commodo
        vulputate lorem fringilla in. Aliquam fringilla quam eu magna aliquet,
        vel ullamcorper mauris lobortis. Donec blandit arcu ut velit maximus, ut
        elementum leo maximus. Duis porttitor nisl sed risus commodo, vitae
        efficitur orci cursus. Suspendisse sollicitudin varius dolor eu varius.
        Vestibulum laoreet risus lectus, sollicitudin fermentum purus dictum
        sed. Donec eros enim, euismod at neque at, elementum ullamcorper nibh.
        Aenean viverra nibh erat, sed tempor dolor scelerisque et. Donec auctor
        odio a dui laoreet, non maximus justo gravida. Mauris nibh neque,
        laoreet consequat diam at, blandit porta lacus. Morbi id mi scelerisque,
        ullamcorper mauris at, convallis urna. Donec dapibus tortor eu volutpat
        feugiat. In vulputate eget mauris sed ornare.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed
        lectus maximus, vestibulum ipsum sit amet, accumsan velit. Ut accumsan
        purus nunc, a bibendum nisl elementum ornare. Nam consectetur quam sed
        quam semper pharetra. Pellentesque posuere viverra ipsum, commodo
        vulputate lorem fringilla in. Aliquam fringilla quam eu magna aliquet,
        vel ullamcorper mauris lobortis. Donec blandit arcu ut velit maximus, ut
        elementum leo maximus. Duis porttitor nisl sed risus commodo, vitae
        efficitur orci cursus. Suspendisse sollicitudin varius dolor eu varius.
        Vestibulum laoreet risus lectus, sollicitudin fermentum purus dictum
        sed. Donec eros enim, euismod at neque at, elementum ullamcorper nibh.
        Aenean viverra nibh erat, sed tempor dolor scelerisque et. Donec auctor
        odio a dui laoreet, non maximus justo gravida. Mauris nibh neque,
        laoreet consequat diam at, blandit porta lacus. Morbi id mi scelerisque,
        ullamcorper mauris at, convallis urna. Donec dapibus tortor eu volutpat
        feugiat. In vulputate eget mauris sed ornare.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed
        lectus maximus, vestibulum ipsum sit amet, accumsan velit. Ut accumsan
        purus nunc, a bibendum nisl elementum ornare. Nam consectetur quam sed
        quam semper pharetra. Pellentesque posuere viverra ipsum, commodo
        vulputate lorem fringilla in. Aliquam fringilla quam eu magna aliquet,
        vel ullamcorper mauris lobortis. Donec blandit arcu ut velit maximus, ut
        elementum leo maximus. Duis porttitor nisl sed risus commodo, vitae
        efficitur orci cursus. Suspendisse sollicitudin varius dolor eu varius.
        Vestibulum laoreet risus lectus, sollicitudin fermentum purus dictum
        sed. Donec eros enim, euismod at neque at, elementum ullamcorper nibh.
        Aenean viverra nibh erat, sed tempor dolor scelerisque et. Donec auctor
        odio a dui laoreet, non maximus justo gravida. Mauris nibh neque,
        laoreet consequat diam at, blandit porta lacus. Morbi id mi scelerisque,
        ullamcorper mauris at, convallis urna. Donec dapibus tortor eu volutpat
        feugiat. In vulputate eget mauris sed ornare.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed
        lectus maximus, vestibulum ipsum sit amet, accumsan velit. Ut accumsan
        purus nunc, a bibendum nisl elementum ornare. Nam consectetur quam sed
        quam semper pharetra. Pellentesque posuere viverra ipsum, commodo
        vulputate lorem fringilla in. Aliquam fringilla quam eu magna aliquet,
        vel ullamcorper mauris lobortis. Donec blandit arcu ut velit maximus, ut
        elementum leo maximus. Duis porttitor nisl sed risus commodo, vitae
        efficitur orci cursus. Suspendisse sollicitudin varius dolor eu varius.
        Vestibulum laoreet risus lectus, sollicitudin fermentum purus dictum
        sed. Donec eros enim, euismod at neque at, elementum ullamcorper nibh.
        Aenean viverra nibh erat, sed tempor dolor scelerisque et. Donec auctor
        odio a dui laoreet, non maximus justo gravida. Mauris nibh neque,
        laoreet consequat diam at, blandit porta lacus. Morbi id mi scelerisque,
        ullamcorper mauris at, convallis urna. Donec dapibus tortor eu volutpat
        feugiat. In vulputate eget mauris sed ornare.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed
        lectus maximus, vestibulum ipsum sit amet, accumsan velit. Ut accumsan
        purus nunc, a bibendum nisl elementum ornare. Nam consectetur quam sed
        quam semper pharetra. Pellentesque posuere viverra ipsum, commodo
        vulputate lorem fringilla in. Aliquam fringilla quam eu magna aliquet,
        vel ullamcorper mauris lobortis. Donec blandit arcu ut velit maximus, ut
        elementum leo maximus. Duis porttitor nisl sed risus commodo, vitae
        efficitur orci cursus. Suspendisse sollicitudin varius dolor eu varius.
        Vestibulum laoreet risus lectus, sollicitudin fermentum purus dictum
        sed. Donec eros enim, euismod at neque at, elementum ullamcorper nibh.
        Aenean viverra nibh erat, sed tempor dolor scelerisque et. Donec auctor
        odio a dui laoreet, non maximus justo gravida. Mauris nibh neque,
        laoreet consequat diam at, blandit porta lacus. Morbi id mi scelerisque,
        ullamcorper mauris at, convallis urna. Donec dapibus tortor eu volutpat
        feugiat. In vulputate eget mauris sed ornare.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed
        lectus maximus, vestibulum ipsum sit amet, accumsan velit. Ut accumsan
        purus nunc, a bibendum nisl elementum ornare. Nam consectetur quam sed
        quam semper pharetra. Pellentesque posuere viverra ipsum, commodo
        vulputate lorem fringilla in. Aliquam fringilla quam eu magna aliquet,
        vel ullamcorper mauris lobortis. Donec blandit arcu ut velit maximus, ut
        elementum leo maximus. Duis porttitor nisl sed risus commodo, vitae
        efficitur orci cursus. Suspendisse sollicitudin varius dolor eu varius.
        Vestibulum laoreet risus lectus, sollicitudin fermentum purus dictum
        sed. Donec eros enim, euismod at neque at, elementum ullamcorper nibh.
        Aenean viverra nibh erat, sed tempor dolor scelerisque et. Donec auctor
        odio a dui laoreet, non maximus justo gravida. Mauris nibh neque,
        laoreet consequat diam at, blandit porta lacus. Morbi id mi scelerisque,
        ullamcorper mauris at, convallis urna. Donec dapibus tortor eu volutpat
        feugiat. In vulputate eget mauris sed ornare.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed
        lectus maximus, vestibulum ipsum sit amet, accumsan velit. Ut accumsan
        purus nunc, a bibendum nisl elementum ornare. Nam consectetur quam sed
        quam semper pharetra. Pellentesque posuere viverra ipsum, commodo
        vulputate lorem fringilla in. Aliquam fringilla quam eu magna aliquet,
        vel ullamcorper mauris lobortis. Donec blandit arcu ut velit maximus, ut
        elementum leo maximus. Duis porttitor nisl sed risus commodo, vitae
        efficitur orci cursus. Suspendisse sollicitudin varius dolor eu varius.
        Vestibulum laoreet risus lectus, sollicitudin fermentum purus dictum
        sed. Donec eros enim, euismod at neque at, elementum ullamcorper nibh.
        Aenean viverra nibh erat, sed tempor dolor scelerisque et. Donec auctor
        odio a dui laoreet, non maximus justo gravida. Mauris nibh neque,
        laoreet consequat diam at, blandit porta lacus. Morbi id mi scelerisque,
        ullamcorper mauris at, convallis urna. Donec dapibus tortor eu volutpat
        feugiat. In vulputate eget mauris sed ornare.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed
        lectus maximus, vestibulum ipsum sit amet, accumsan velit. Ut accumsan
        purus nunc, a bibendum nisl elementum ornare. Nam consectetur quam sed
        quam semper pharetra. Pellentesque posuere viverra ipsum, commodo
        vulputate lorem fringilla in. Aliquam fringilla quam eu magna aliquet,
        vel ullamcorper mauris lobortis. Donec blandit arcu ut velit maximus, ut
        elementum leo maximus. Duis porttitor nisl sed risus commodo, vitae
        efficitur orci cursus. Suspendisse sollicitudin varius dolor eu varius.
        Vestibulum laoreet risus lectus, sollicitudin fermentum purus dictum
        sed. Donec eros enim, euismod at neque at, elementum ullamcorper nibh.
        Aenean viverra nibh erat, sed tempor dolor scelerisque et. Donec auctor
        odio a dui laoreet, non maximus justo gravida. Mauris nibh neque,
        laoreet consequat diam at, blandit porta lacus. Morbi id mi scelerisque,
        ullamcorper mauris at, convallis urna. Donec dapibus tortor eu volutpat
        feugiat. In vulputate eget mauris sed ornare.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed
        lectus maximus, vestibulum ipsum sit amet, accumsan velit. Ut accumsan
        purus nunc, a bibendum nisl elementum ornare. Nam consectetur quam sed
        quam semper pharetra. Pellentesque posuere viverra ipsum, commodo
        vulputate lorem fringilla in. Aliquam fringilla quam eu magna aliquet,
        vel ullamcorper mauris lobortis. Donec blandit arcu ut velit maximus, ut
        elementum leo maximus. Duis porttitor nisl sed risus commodo, vitae
        efficitur orci cursus. Suspendisse sollicitudin varius dolor eu varius.
        Vestibulum laoreet risus lectus, sollicitudin fermentum purus dictum
        sed. Donec eros enim, euismod at neque at, elementum ullamcorper nibh.
        Aenean viverra nibh erat, sed tempor dolor scelerisque et. Donec auctor
        odio a dui laoreet, non maximus justo gravida. Mauris nibh neque,
        laoreet consequat diam at, blandit porta lacus. Morbi id mi scelerisque,
        ullamcorper mauris at, convallis urna. Donec dapibus tortor eu volutpat
        feugiat. In vulputate eget mauris sed ornare.
      </p>
    </div>
  );
};

export default ModalPage;
